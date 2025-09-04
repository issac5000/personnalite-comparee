// Podcast tracking: counts one play (after threshold) and one completion per episode per session.
// Requires: window.supabase set by public/common.js

const sb = window.supabase;
if (!sb) console.error('[podcast] Supabase non initialisé via common.js');

function getCid() {
  const name = 'cid=';
  const parts = document.cookie.split(';').map(s => s.trim());
  const found = parts.find(p => p.startsWith(name));
  if (found) return decodeURIComponent(found.slice(name.length));
  const cid = (crypto?.randomUUID?.() || Math.random().toString(36).slice(2));
  const expires = new Date(Date.now() + 4002460601000).toUTCString();
  document.cookie = `cid=${encodeURIComponent(cid)}; path=/; expires=${expires}; samesite=lax`;
  return cid;
}

async function insertEvent(event_name, value) {
  try {
    // Prefer the site-wide helper if present to match schema/RLS
    if (typeof window.saveEvent === 'function') {
      await window.saveEvent(event_name, null, value, { source: 'podcast' });
      console.log('[podcast] insert ok', { event_name, value, via: 'saveEvent' });
      return true;
    }
    // Fallback: direct insert
    const payload = {
      event_name,
      event_category: 'Media',
      value,
      referrer: document.referrer || null,
      occurred_at: new Date().toISOString(),
      client_id: getCid()
    };
    const { error } = await sb.from('events').insert([payload]);
    if (error) {
      console.error('[podcast] events.insert error', error);
      return false;
    } else {
      console.log('[podcast] insert ok', { event_name, value, via: 'direct' });
      return true;
    }
  } catch (e) { console.error('[podcast] insertEvent exception', e); }
}

const el = document.getElementById('home-podcast-audio');
if (!el) {
  const msg = '[podcast] Element <audio id="home-podcast-audio"> introuvable dans le HTML. Ajoutez: <audio id="home-podcast-audio" data-episode-id="intro" ...>';
  console.warn(msg);
  alert(msg);
} else {
  if (!('episodeId' in el.dataset)) {
    const warn = '[podcast] Attribut data-episode-id manquant sur #home-podcast-audio. Ajoutez data-episode-id="intro" (ou autre identifiant).';
    console.warn(warn);
    alert(warn);
  }

  const episode = el.dataset.episodeId || 'intro';
  const thresholdMs = Number(el.dataset.playThreshold || 15000);
  let timer = null; // legacy timer (kept unused by default)
  let playedMs = 0;
  let lastTime = 0;
  const playedKey = `pp:${episode}:play`;
  const endedKey = `pp:${episode}:ended`;

  // Trace de binding pour vérification
  console.log('[podcast] Binding listeners', { episode, thresholdMs });

  const scheduleFromProgress = () => {
    if (sessionStorage.getItem(playedKey)) return;
    if (!el.paused && playedMs >= thresholdMs) {
      insertEvent('PodcastPlay', episode);
      sessionStorage.setItem(playedKey, '1');
      console.log('[podcast] PodcastPlay envoyé', { episode, playedMs });
    }
  };

  el.addEventListener('play', () => {
    lastTime = el.currentTime || 0;
  });

  el.addEventListener('playing', () => {
    lastTime = el.currentTime || 0;
  });

  el.addEventListener('pause', () => {
    // no-op; keep playedMs accumulated
  });

  el.addEventListener('seeking', () => {
    // While seeking, reset lastTime to avoid jump accumulation
    lastTime = el.currentTime || 0;
  });

  el.addEventListener('seeked', () => {
    lastTime = el.currentTime || 0;
  });

  el.addEventListener('timeupdate', () => {
    if (sessionStorage.getItem(playedKey)) return; // already counted
    if (el.paused) { lastTime = el.currentTime || lastTime; return; }
    const nowT = el.currentTime || 0;
    let dt = Math.max(0, (nowT - lastTime) * 1000);
    // Ignore large jumps (likely seek)
    if (dt > 2000) dt = 0;
    playedMs += dt;
    lastTime = nowT;
    scheduleFromProgress();
  });

  el.addEventListener('ended', () => {
    clearTimeout(timer);
    if (!sessionStorage.getItem(endedKey)) {
      insertEvent('PodcastCompleted', episode);
      sessionStorage.setItem(endedKey, '1');
      console.log('[podcast] PodcastCompleted envoyé', { episode });
    }
  });
}
