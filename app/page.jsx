"use client";

import { useState } from "react";
import NavBar from "./components/Navbar";
import Card from "./components/Card";
import HomePage_section1 from "./homePage/homePage_section1";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage_section1 />
      <Card
        title="Création d'un playermodel avec un script !"
        theme="Modélisation 3D"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto cum corporis tenetur, voluptatum, provident qui ab nisi fugiat ullam necessitatibus ipsa? Deleniti, doloribus. Minus reprehenderit aliquam enim magnam distinctio?
Unde perferendis rem deleniti. Suscipit, modi. Dolore vitae voluptas minima corporis asperiores? Debitis perferendis excepturi maiores iste vitae. Tempore esse ipsam vel voluptatum ratione excepturi omnis nam perspiciatis et quaerat."
      />
    </>
  );
}
