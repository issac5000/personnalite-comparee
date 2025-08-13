export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { password } = req.body;

  // Debug pour voir ce qui est reçu et ce que l'environnement contient
  console.log("🔍 Mot de passe attendu (depuis env) :", process.env.ADMIN_PASSWORD);
  console.log("🔍 Mot de passe reçu :", password);

  // Vérification du mot de passe via variable d'environnement
  if (password === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ message: "Mot de passe incorrect" });
  }
}
