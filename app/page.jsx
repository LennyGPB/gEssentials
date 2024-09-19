"use client";

import { useState, useRef, useEffect  } from "react";
import NavBar from "./components/Navbar";
import Card from "./components/Card";
import HomePage_section1 from "./components/homePage/homePage_section1";
import HomePage_section2 from "./components/homePage/homePage_section2";

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPopup, setShowPopup] = useState(true);
    const audioRef = useRef(null)
    
    const startAudio = () => {
        audioRef.current.play();
        setIsPlaying(true);
        setShowPopup(false);
    };

    const muteAudio = () => {
        setIsPlaying(false);
        setShowPopup(false);
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = .05;
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

        {showPopup && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">💃 Voulez-vous de la musique ? 🕺</h2>
                    <div className="space-x-4">
                        <button onClick={startAudio} className="bg-blue text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
                            Mettre la musique 🎶
                        </button>
                        <button onClick={muteAudio} className="bg-red-900 text-white px-6 py-3 rounded-md hover:bg-gray-400 transition">
                            Retirer la musique 🔇
                        </button>
                    </div>
                </div>
            </div>
        )}

        {!showPopup && (
            <button onClick={toggleAudio} className="fixed bottom-5 left-5 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition">
                {isPlaying ? "🔇" : "🎶"} 
            </button>
        )}
    </>
  );
}
