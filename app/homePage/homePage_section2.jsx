"use client";

import Card from "../components/Card";

export default function HomePage_section2() {
  return (
    <>
      <section className="mt-52">
        <h1 className="text-4xl text-white tracking-widest uppercase text-center">
          Nos dernières formations :
        </h1>

        <article className="flex justify-center mt-10 mb-10 flex-wrap">
          <Card />
        </article>
      </section>
    </>
  );
}
