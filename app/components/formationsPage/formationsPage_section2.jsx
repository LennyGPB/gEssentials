"use client";

import Particles from "@/components/magicui/particles";
import { useState } from "react";
import { useSession } from "next-auth/react";
import CardForma from "../CardForma";

export default function formationsPage_section2() {
  const { data: session } = useSession();
  const [color, setColor] = useState("#FFFFFF");

  const userRole = session?.user?.roles?.[0] || null;

  return (
    <>
      <section className="mt-52">
        {userRole && userRole !== "💠・Gérant" && (
          <div className="flex flex-col items-center bg-white m-auto mx-96 text-center text-ellipsis overflow-hidden">
            <p className="text-3xl tracking-widest">ATTENTION !</p>
            <p className="text-xl">
              Vous ne pouvez pas vous rendre ici, retournez à la page d'accueil
            </p>
            <a className="text-xl text-blue" href="/">
              Retour à la page d'accueil
            </a>
          </div>
        )}

        {userRole === "💠・Gérant" && (
          <form className="flex flex-col justify-center gap-12 flex-wrap text-white bg-slate-900 rounded-10 w-3/4 mx-auto">
            <div className="border-t-4 border-b-4 border-indigo-500 p-8">
              <fieldset className="mb-6">
                <legend className="text-2xl mb-6">Les informations :</legend>

                <label for="title" className="block mb-2">
                  Votre titre :
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Vous inscrivez ici le titre de la formation !"
                  className="w-full"
                />

                <label for="desc" className="block mb-2">
                  Votre description :
                </label>
                <input
                  type="textarea"
                  id="desc"
                  name="desc"
                  placeholder="Vous inscrivez ici la description de la formation !"
                  className="w-full"
                />

                <label for="price" className="block mb-2">
                  Votre prix :
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Vous inscrivez ici le prix de la formation !"
                  className="w-full"
                />
              </fieldset>
            </div>

            <div className="border-t-4 border-b-4 border-indigo-500 p-8">
              <fieldset className="mb-6">
                <legend className="text-2xl mb-6">
                  Quelle est le type de la formation ? :
                </legend>

                <label for="dev" className="block mb-2">
                  Développement :
                </label>
                <input type="checkbox" id="dev" name="dev" />

                <label for="mod3D" className="block mb-2">
                  Modélisation 3D :
                </label>
                <input type="checkbox" id="mod3D" name="mod3D" />

                <label for="anim3D" className="block mb-2">
                  Animation 3D :
                </label>
                <input type="checkbox" id="anim3D" name="anim3D" />

                <label for="map" className="block mb-2">
                  Mapping :
                </label>
                <input type="checkbox" id="map" name="map" />
              </fieldset>
            </div>

            <div className="border-t-4 border-b-4 border-indigo-500 p-8">
              <fieldset className="mb-6">
                <legend className="text-2xl mb-6">Vocal ou écrit ? :</legend>

                <label for="ecrit" className="block mb-2">
                  Par support écrit :
                </label>
                <input type="checkbox" id="ecrit" name="ecrit" />

                <label for="vocal" className="block mb-2">
                  Par support oral :
                </label>
                <input type="checkbox" id="vocal" name="vocal" />
              </fieldset>
            </div>
          </form>
        )}

        <Particles
                className="absolute inset-0 z-[-1]"
                quantity={300}
                ease={80}
                color={color}
                refresh
                />   
      </section>
    </>
  );
}
