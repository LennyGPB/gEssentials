// pages/index.jsx

"use client";

import { useState, useRef, useEffect } from "react";
import NavBar from "./components/Navbar";
import HomePage_section1 from "./components/homePage/homePage_section1";
import HomePage_section2 from "./components/homePage/homePage_section2";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const muteAudio = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05;
    }
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <SessionProvider>
      <NavBar />
      <HomePage_section1 />
      <HomePage_section2 />
    </SessionProvider>
  );
}
