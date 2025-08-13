export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { password } = req.body;

  console.log("=== DEBUG LOGIN PROD ===");
  console.log("🔍 Mot de passe attendu (process.env.ADMIN_PASSWORD) :", process.env.ADMIN_PASSWORD);
  console.log("🔍 Mot de passe reçu :", password);

  if (password === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ message: "Mot de passe incorrect" });
  }
}
