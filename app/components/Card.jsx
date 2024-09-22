"use client";

import Particles from "@/components/magicui/particles";
import { useState } from "react";

export default function Card({ title, theme, text }) {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <>
      <article className="relative flex flex-col bg-gradient-to-br from-blackgradient to-blackgradient2 justify-start items-center border border-white text-white w-[500px] h-[245px] rounded-tl-10 rounded-br-40 rounded-tr-40 rounded-bl-10 shadow-md shadow-white">
        <p className="text-3xl tracking-widest my-3">TITRE FORMATIONS</p>

        <div className="flex gap-2 mb-5 uppercase">
          <p className="bg-blue px-1 rounded-lg">Modélisation 3D</p>
          <p className="bg-blue px-1 rounded-lg">Animation 3D</p>
        </div>

        <p className="tracking-wide mb-3 px-7 text-center text-ellipsis overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor
          nobis eligendi porro assumenda veniam quo voluptatum voluptate alias
          nobis eligendi porro assumenda veniam quo voluptatum voluptate alias
        </p>

        <a
          href="/d"
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
