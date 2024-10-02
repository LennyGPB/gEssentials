"use client";

import Card from "../Card";
import { useEffect, useState } from "react";

export default function HomePage_section2() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await fetch("/api/getFormations");
        const data = await response.json();

        // Trier les formations par createdAt en ordre décroissant
        const sortedFormations = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Limiter à 3 formations les plus récentes
        setFormations(sortedFormations.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };

    fetchFormations();
  }, []);

  return (
    <>
      <section className="mt-52">
        <h1 className="text-4xl text-white tracking-widest uppercase text-center">
          Nos dernières formations :
        </h1>

        <article className="flex justify-center mt-12 gap-14 mb-10 flex-wrap">
          {formations.map((formation) => (
            <Card
              key={formation.id}
              titre={formation.titre}
              categorie={formation.categorie}
              type={formation.type}
              description={formation.description}
            />
          ))}
        </article>
      </section>
    </>
  );
}
