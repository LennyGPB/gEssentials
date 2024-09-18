"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Particles from "@/components/magicui/particles";

export default function HomePage_section1() {
  const [color, setColor] = useState("#00000");

  return (
    <>
      <section>
        <div className="flex justify-center items-center text-white flex-col">
          <h1 className="text-center  tracking-widest text-8xl pt-32">
            gESSENTIALS
          </h1>

          <h2 className="tracking-widest text-3xl pt-2">
            Apprenez à nos cotés
          </h2>

          <a
            href="/d"
            className="p-3 px-48 mt-8 rounded-lg tracking-widest font-bold text-white bg-gradient-to-r from-blue to-blue-600 hover:scale-105 transition duration-500"
          >
            CONSULTER NOS FORMATIONS
          </a>
        </div>
      </section>
    </>
  );
}
