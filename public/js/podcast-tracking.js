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
      return;
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
    if (error) console.error('[podcast] events.insert error', error);
  } catch (e) { console.error('[podcast] insertEvent exception', e); }
}

const el = document.getElementById('home-podcast-audio');
if (!el) {
  console.warn('[podcast] #home-podcast-audio introuvable');
} else {
  const episode = el.dataset.episodeId || 'intro';
  const thresholdMs = Number(el.dataset.playThreshold || 15000);
  let timer = null;
  const playedKey = `pp:${episode}:play`;
  const endedKey = `pp:${episode}:ended`;

  el.addEventListener('play', () => {
    if (sessionStorage.getItem(playedKey)) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      insertEvent('PodcastPlay', episode);
      sessionStorage.setItem(playedKey, '1');
    }, thresholdMs);
  });

  el.addEventListener('pause', () => clearTimeout(timer));

  el.addEventListener('ended', () => {
    clearTimeout(timer);
    if (!sessionStorage.getItem(endedKey)) {
      insertEvent('PodcastCompleted', episode);
      sessionStorage.setItem(endedKey, '1');
    }
  });
}
