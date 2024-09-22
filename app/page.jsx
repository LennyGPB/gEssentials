"use client";

import HomePage_section1 from "./components/homePage/homePage_section1";
import HomePage_section2 from "./components/homePage/homePage_section2";
import NavBar from "./components/Navbar";

export default function Home() {
    return (
        <>
            <NavBar />
            <HomePage_section1 />
            <HomePage_section2 />
        </>   
    );
}
