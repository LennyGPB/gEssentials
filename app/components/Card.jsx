import Image from "next/image";

export default function Card({ title, theme, text }) {
  return (
    <>
      <div className="bg-gradient-to-br from-blackgradient to-blackgradient2 rounded-br-3xl mx-card p-5 my-60 drop-shadow-2xl border border-white">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-sm">Thème : {theme}</p>
        <p className="text-center p-5">{text}</p>
        <button className="bg-gray-700 hover:bg-gray-600 font-bold py-2 px-4 rounded-full border border-white">
          Voir la formation
        </button>
      </div>
    </>
  );
}
