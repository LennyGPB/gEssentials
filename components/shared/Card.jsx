"use client";

import Particles from "../magicui/particles";
import { useEffect, useState } from "react";
import formationsPage_section1 from "./formationsPage/formationsPage_section1";

export default function Card({ titre, categorie, type, description, id }) {
  const [color, setColor] = useState("#FFFFFF");
  const [formations, SetFormations] = useState([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await fetch("/api/getFormations");
        const data = await response.json();
        SetFormations(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFormations();
  }, []);

  return (
    <>
      <article className="relative flex flex-col bg-gradient-to-br from-blackgradient to-blackgradient2 justify-start items-center border border-white text-white w-[500px] h-[245px] rounded-tl-10 rounded-br-40 rounded-tr-40 rounded-bl-10 transition duration-500">
        <p className="text-3xl tracking-widest my-3">{titre}</p>
        <div className="flex gap-2 mb-5 uppercase">
          <p className="bg-gradient-to-r from-blue to-blue-600 px-2 rounded-lg tracking-widest">
            {categorie}
          </p>
          <p className="bg-gradient-to-r from-blue to-blue-600 px-2 rounded-lg tracking-widest">
            {type}
          </p>
        </div>
        <p className="tracking-wide mb-3 px-7 text-center text-ellipsis overflow-hidden">
          {description}
        </p>
        <a
          href={`/formation/${id}`}
          className="absolute p-2 bg-blue uppercase rounded-lg bottom-[-16px] tracking-widest z-20"
        >
          Voir la formation
        </a>
        <Particles
          className="absolute inset-0 z-10"
          quantity={50}
          ease={80}
          color={color}
          refresh
        />
      </article>
    </>
  );
}
