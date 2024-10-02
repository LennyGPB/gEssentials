"use client";

import { useEffect, useState } from "react";

const Formation = ({ params }) => {
  const { id } = params; // Récupération de l'ID à partir des paramètres
  const [formation, setFormation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchFormation = async () => {
        try {
          const response = await fetch(`/api/getFormation?id=${id}`);
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la formation");
          }
          const data = await response.json();
          setFormation(data);
        } catch (error) {
          console.error(
            "Erreur lors de la récupération de la formation:",
            error
          );
        }
      };

      fetchFormation();
    }
  }, [id]);

  const handleCreateChannel = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/createChannel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ channelName: `canal-${formation.titre}` }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      console.log("Canal créé avec succès:", data.channelId);
      // Tu peux aussi afficher un message de succès à l'utilisateur
    } catch (error) {
      console.error("Erreur lors de la création du canal Discord:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Chargement...</div>; // Afficher un message de chargement
  }

  if (!formation) {
    return <div>Formation non trouvée</div>; // Afficher un message si la formation n'est pas trouvée
  }

  return (
    <div>
      <h1>{formation.titre}</h1>
      <p>{formation.description}</p>
      <p>Catégorie: {formation.categorie}</p>
      <p>Type: {formation.type}</p>
      <button type="button" onClick={handleCreateChannel}>
        ACHETER
      </button>
    </div>
  );
};

export default Formation;
