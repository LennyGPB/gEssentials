"use client";

import { useState, useRef, useEffect } from "react";

export default function GlobalAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

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
      <audio ref={audioRef} autoPlay loop>
        <source src="/audio/lofi_background.wav" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleAudio}
        className="fixed bottom-5 left-5 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition"
      >
        {isPlaying ? "🔇" : "🎶"}
      </button>
    </>
  );
}