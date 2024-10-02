"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Particles from "../../magicui/particles";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function HomePage_section1() {
  const [color, setColor] = useState("#FFFFFF");
  return (
    <>
      <section>
        <div className="flex justify-center items-center text-white flex-col pt-10">
          <h1 className="text-center  tracking-widest text-8xl pt-32">
            gESSENTIALS
          </h1>

          <h2 className="tracking-widest text-3xl pt-2">
            <RoughNotation
              type="highlight"
              show={true}
              color="#2B4999"
              animationDuration={2500}
            >
              Apprenez à nos cotés
            </RoughNotation>
          </h2>

          <a
            href="/d"
            className="p-3 px-48 mt-8 rounded-lg tracking-widest font-bold text-white bg-gradient-to-r from-blue to-blue-600 hover:scale-105 transition duration-500"
          >
            CONSULTER NOS FORMATIONS
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16 mt-16 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
        </div>

        <Particles
          className="absolute inset-0 z-[-1]"
          quantity={300}
          ease={80}
          color={color}
          refresh
        />
      </section>
    </>
  );
}
