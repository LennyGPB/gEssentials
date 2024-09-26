import upload from "../../lib/multer";
import { prisma } from "../../lib/prisma";

// Désactive le bodyParser intégré
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: "Error uploading file" });
      }

      try {
        const { titre, description, auteur, prix, categorie, type } = req.body;
        const image = req.file;

        const newFormation = await prisma.formation.create({
          data: {
            titre,
            description,
            auteur,
            prix,
            image_url: `/uploads/${image.filename}`,
            categorie,
            type,
          },
        });

        res.status(200).json({
          message: "Formation créée avec succès",
          formation: newFormation,
        });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ error: "Erreur lors de la création de la formation" });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
