"use client";

import NavBar from "./components/Navbar";
import HomePage_section1 from "./components/homePage/homePage_section1";
import HomePage_section2 from "./components/homePage/homePage_section2";

export default function Home() {
    return (
        <>
            <NavBar />
            <HomePage_section1 />
            <HomePage_section2 />
        </>
    );
}
