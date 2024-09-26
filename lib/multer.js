const multer = require("multer");
const path = require("node:path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "public/uploads")); // Dossier où les fichiers seront stockés
  },

  // Fonction pour déterminer le nom des fichiers téléchargés
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.fieldname}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
export default upload;
