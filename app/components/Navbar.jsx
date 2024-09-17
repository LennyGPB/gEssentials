import Image from "next/image";

export default function NavBar() {
    return <>
        <nav className="flex justify-between items-center py-1 px-40 bg-navbar text-white">
            <a href="/" className="w-28 h-28"><img src="../images/gessentials.png" alt="gessentials logo"/></a>
            <ul className="flex space-x-12">
                <li><a href="/formations"  className="hover:text-gray-400" >Nos Formations</a></li>
                <li><a href="/avis"  className="hover:text-gray-400" >Avis</a></li>
                <li><a href="/discord"  className="hover:text-gray-400" >Notre discord</a></li>
            </ul>
        </nav>
    </>;
}