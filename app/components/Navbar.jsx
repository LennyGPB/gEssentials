"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useMemo } from "react";

export default function NavBar() {
    const { data: session } = useSession();

    // Log uniquement si la session change
    useMemo(() => {
        console.log("NavBar rendered", session);
    }, [session]);

    return (
        <nav className="flex justify-between items-center py-1 px-12 text-white">
            <a href="/" className="w-20 h-20">
                <img src="../images/gessentials.png" alt="gessentials logo" />
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
                            <li className="flex flex-col items-start">
                                <p className="text-gray-300 font-semibold">Rôles :</p>
                                <ul className="list-disc ml-4">
                                    {session.user.roles.map((role, index) => (
                                        <li key={index} className="text-gray-300">{role}</li>
                                    ))}
                                </ul>
                            </li>
                        )}
                        
                        <li>
                            <button
                                type="button"
                                onClick={() => signOut()}
                                className="bg-red-500 p-2 rounded-md"
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
