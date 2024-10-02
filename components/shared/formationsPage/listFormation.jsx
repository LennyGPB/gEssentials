"use client";

import { RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";
import Card from "../Card";

export default function listFormation() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await fetch("/api/getFormations");
        const data = await response.json();

        setFormations(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFormations();
  }, []);

  return (
    <>
      <section className="mt-16">
        <h1 className="text-white text-5xl text-center uppercase tracking-widest">
          <RoughNotation
            type="highlight"
            show={true}
            color="#2B4999"
            animationDuration={2500}
          >
            Nos Formations
          </RoughNotation>
        </h1>
        <article className="flex justify-center mt-16 gap-14 mb-10 flex-wrap ">
          {formations.map((formation) => (
            <Card
              key={formation.id_formation}
              titre={formation.titre}
              categorie={formation.categorie}
              type={formation.type}
              description={formation.description}
              id={formation.id_formation}
            />
          ))}
        </article>
      </section>
    </>
  );
}
