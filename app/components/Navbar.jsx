"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session, status } = useSession();

  return (
    <>
      <nav className="flex justify-between items-center py-1 px-12 text-white">
        <a href="/" className="w-20 h-20">
          <img src="../images/gessentials.png" alt="gessentials logo" />
        </a>

        <ul className="flex gap-7 uppercase tracking-widest">
          <li>
            <a href="/formations" className="hover:text-gray-400">
              Nos Formations
            </a>
          </li>
          <li>
            <a href="/avis" className="hover:text-gray-400">
              Avis
            </a>
          </li>
          <li>
            <a href="/discord" className="hover:text-gray-400">
              Notre discord
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => signIn("discord")}
              className="bg-blue p-2 rounded-md"
            >
              Se connecter
            </button>
          </li>
          {session && (
            <li>
              <button
                type="button"
                onClick={() => signOut()}
                className="bg-red-500 p-2 rounded-md"
              >
                Se déconnecter
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
