"use client";

import localFont from "next/font/local";
import "./globals.css";
import GlobalAudio from "./components/GlobalAudio";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { metadata } from "./metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
    useEffect(() => {
        document.title = metadata.title;
    }, []);

  return (
    <html lang="fr">
        <head>
            <meta name="description" content="Vous êtes ici, sur le site de gEssentials !" />
        </head>
        <SessionProvider>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
            <GlobalAudio />
            </body>
        </SessionProvider>
    </html>
  );
}
