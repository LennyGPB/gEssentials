import Image from "next/image";
//import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";

export default function Card({ title, theme, text }) {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <>
      <article className="relative flex flex-col bg-gradient-to-br from-blackgradient to-blackgradient2 items-center border border-white text-white my-5 mx-96  shadow-md shadow-white">
        <p className="text-3xl tracking-widest my-3">TITRE FORMATION</p>

        <div className="flex gap-24 mb-2 uppercase">
          <p className="bg-blue px-5 rounded-lg">Modélisation 3D</p>
          <p className="bg-blue px-5 rounded-lg">Animation 3D</p>
          <p className="bg-blue px-5 rounded-lg">Blender</p>
        </div>

        <p className="tracking-wide mb-3 px-7 text-center text-ellipsis overflow-hiden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor
          nobis eligendi porro assumenda veniam quo voluptatum voluptate alias
          nobis eligendi porro assumenda veniam quo voluptatum voluptate alias
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit,
          similique deserunt suscipit hic accusantium libero aliquid provident
          eligendi, eius voluptatum corporis sed temporibus quaerat quasi rem
          dicta. Vero, sint. Aliquam fuga nihil repudiandae consectetur
          quisquam, voluptate voluptatem quaerat culpa. Animi incidunt odio
          atque quo labore id. Recusandae ut nesciunt sequi error temporibus ea
          sed quae rem qui laudantium? Excepturi. Rerum culpa explicabo illo
          repellat iusto impedit odit reprehenderit maxime nulla itaque!
          Aspernatur excepturi pariatur quis nemo accusantium dolore quasi, nam
          neque quo aliquam, placeat non dolor enim? Architecto, similique?
          Minima illo eligendi ad dolorum vel rerum adipisci natus at in neque
          quo tempora autem consequuntur quaerat quae, ipsam aliquid porro
          voluptates nisi provident perspiciatis maiores inventore consequatur
          ex? Quo. Nesciunt, illum? Beatae tempora inventore eum minima omnis
          sunt cupiditate aperiam blanditiis doloribus. Consectetur delectus
          soluta est provident sed sint officiis error deleniti suscipit magni
          doloribus laboriosam, dolores facilis quibusdam! Asperiores recusandae
          suscipit fuga voluptatibus dolor praesentium. Aperiam sit odio, ex rem
          libero corporis!{" "}
        </p>

        <div className="flex items-center gap-80 my-5 uppercase">
          <p className="bg-blue px-2 rounded-lg">Prix : 10 €</p>
          <a className="bg-blue p-3 rounded-lg">Prendre cette formation</a>
          <p className="bg-blue px-2 rounded-lg">By Jin</p>
        </div>

        {/* <Particles
            className="absolute inset-0 z-10"
            quantity={50}
            ease={80}
            color={color}
            refresh
            /> */}
      </article>
    </>
  );
}
