"use client";

import Card from "../Card";
import { useEffect } from "react";

export default function HomePage_section2() {
    return (
        <>
        <section className="mt-52">
            <h1 className="text-4xl text-white tracking-widest uppercase text-center">
            Nos dernières formations :
            </h1>

            <article className="flex justify-center mt-12 gap-14 mb-10 flex-wrap">
            <Card />
            <Card />
            <Card />
            </article>
        </section>
        </>
    );
}
