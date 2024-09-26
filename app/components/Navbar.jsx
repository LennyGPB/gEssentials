"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useMemo } from "react";

export default function NavBar() {
    const { data: session } = useSession();
    return (
        <nav className="flex justify-between items-center py-1 px-12 text-white">
            <a href="/" className="w-20 h-20">
                <img src="../images/gessentials.webp" alt="gessentials logo" />
            </a>

            <ul className="flex gap-7 uppercase tracking-widest items-center">
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
                {!session ? (
                    <li>
                        <button
                            type="button"
                            onClick={() => signIn("discord")}
                            className="bg-blue-500 p-2 rounded-md"
                        >
                            Se connecter
                        </button>
                    </li>
                ) : (
                    <>
                        <li className="flex items-center">
                            <p className="mr-2">Pseudo : {session.user.global_name}</p>
                            <img 
                                src={session.user.image} 
                                className="rounded-full w-8 h-8" 
                                alt="User profile"
                            />
                        </li>

                        {session.user.roles && session.user.roles.length > 0 && (
                            <li className="flex items-center">
                                {session.user.roles.map((role, index) => (
                                    <p className="text-gray-300 font-semibold bg-blue rounded-full px-4 py-2">{role}</p>
                                ))}
                            </li>

                        )}
                        
                        <li>
                            <button
                                type="button"
                                onClick={() => signOut()}
                                className="bg-red-700 p-2 rounded-md"
                            >
                                Se déconnecter
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
