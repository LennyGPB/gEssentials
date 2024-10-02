import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query; // Extraire l'ID de la requête

    try {
      const formation = await prisma.formation.findUnique({
        where: { id_formation: Number.parseInt(id) }, // Utiliser id_formation pour trouver la formation
      });

      if (formation) {
        res.status(200).json(formation); // Envoyer la formation dans la réponse
      } else {
        res.status(404).json({ error: "Formation non trouvée" }); // Formation non trouvée
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération de la formation" });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}
