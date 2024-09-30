"use client";

import { useState, useRef, useEffect } from "react";
import NavBar from "../components/shared/Navbar";
import HomePage_section1 from "../components/shared/homePage/homePage_section1";
import HomePage_section2 from "../components/shared/homePage/homePage_section2";

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
    <>
      <NavBar />
      <HomePage_section1 />
      <HomePage_section2 />

      <audio ref={audioRef} autoPlay loop>
        <source src="../audio/lofi_background.wav" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        type="button"
        onClick={toggleAudio}
        className="fixed bottom-5 left-5 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition"
      >
        {isPlaying ? "🔇" : "🎶"}
      </button>
    </>
  );
}
