export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { password } = req.body;

  // Vérification du mot de passe via variable d'environnement
  if (password === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ message: "Mot de passe incorrect" });
  }
}
