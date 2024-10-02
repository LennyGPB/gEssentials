import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const formations = await prisma.formation.findMany();
      res.status(200).json(formations);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des formations" });
    }
  }
}
