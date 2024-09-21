"use client";

//import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import CardForma from "../CardForma";

export default function formationsPage_section1() {
  const [color, setColor] = useState("#FFFFFF");
  return (
    <>
      <section className="mt-52">
        <h1 className="text-4xl text-white tracking-widest uppercase text-center">
          Nos formations :
        </h1>

        <article className="flex justify-center mt-10 gap-14 mb-10 flex-wrap">
          <CardForma />
          <CardForma />
          <CardForma />
          <CardForma />
        </article>

        {/* <Particles
                className="absolute inset-0 z-[-1]"
                quantity={300}
                ease={80}
                color={color}
                refresh
                />    */}
      </section>
    </>
  );
}
