"use client";

//import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function formationsPage_section2() {
  const { data: session } = useSession();
  const [color, setColor] = useState("#FFFFFF");

  const [formations, setFormations] = useState({
    // Crée un objet pour stocker les données du formulaire
    titre: "",
    description: "",
    auteur: "",
    prix: null,
    image: null,
    categorie: "",
    type: "",
  });

  const handleChange = (e) => {
    // Fonction pour mettre à jour les données du formulaire
    const { name, value } = e.target;
    setFormations((prevFormations) => ({
      ...prevFormations, // Copie les données existantes
      [name]: value, // Met à jour les données
    }));
  };

  const handleSelectChange = (e) => {
    // Fonction pour mettre à jour les données des select
    const { name, value } = e.target;

    setFormations((prevFormations) => ({
      ...prevFormations,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    // Fonction pour mettre à jour l'image
    const file = e.target.files[0];

    if (file) {
      setFormations((prevFormations) => ({
        ...prevFormations,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    // Fonction pour envoyer les données du formulaire
    e.preventDefault();

    const dataFormation = new FormData(e.currentTarget);
    console.log("Données formulaire :", dataFormation);

    try {
      const reponse = await fetch("/api/createFormation", {
        method: "POST",
        body: dataFormation,
      });

      if (reponse.ok) {
        console.log("Formation ajoutée avec succès !");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const userRole = session?.user?.roles?.[0] || null;

  return (
    <>
      <section className="mt-28">
        {userRole && userRole !== "💠・Gérant" && (
          <div className="flex flex-col items-center bg-white m-auto mx-96 text-center text-ellipsis overflow-hidden">
            <p className="text-3xl tracking-widest">ATTENTION !</p>
            <p className="text-xl">
              Vous ne pouvez pas vous rendre ici, retournez à la page d'accueil
            </p>
            <a className="text-xl text-blue" href="/">
              Retour à la page d'accueil
            </a>
          </div>
        )}

        {/* {userRole === "💠・Gérant" && ( */}

        <h1 className="text-center text-white text-5xl uppercase tracking-widest">
          Créer une formation
        </h1>

        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col justify-center items-center mt-10 gap-5"
        >
          <div className="flex gap-6 justify-center">
            <input
              type="text"
              name="titre"
              onChange={handleChange}
              placeholder="Titre"
              className="bg-white rounded-md p-1 w-96 text-black placeholder:text-black"
            />

            <input
              type="text"
              name="auteur"
              onChange={handleChange}
              placeholder="auteur"
              className="bg-white rounded-md p-1 placeholder:text-black w-56"
            />
          </div>

          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            placeholder="Description"
            className="bg-white rounded-md p-1 w-[700px] h-40 text-black placeholder:text-black"
          />

          <div className="flex gap-6 justify-center">
            <select
              name="categorie"
              id="categorie"
              onChange={handleSelectChange}
              className="bg-white rounded-md p-1 w-56"
            >
              <option value="Développement">Développement</option>
              <option value="Modelisation 3D">Modelisation 3D</option>
              <option value="Map">MAP</option>
            </select>

            <select
              name="type"
              id="type"
              onChange={handleSelectChange}
              className="bg-white rounded-md p-1 w-56"
            >
              <option value="Vocal">Vocal</option>
              <option value="Ecrit">Ecrit</option>
            </select>

            <input
              type="number"
              name="prix"
              placeholder="Prix"
              onChange={handleChange}
              className="bg-white text-black rounded-md p-1 placeholder:text-black"
            />
          </div>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="bg-white p-1 rounded-md"
          />

          <button type="submit" className="bg-white p-1 rounded-md w-96">
            Confirmer
          </button>
        </form>
      </section>
    </>
  );
}
