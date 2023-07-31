import { Link } from 'wouter';
import '../styles/NavBar.css';
import { DropdownNavBar } from './DropdownNavBar';

export function NavBar() {
    const navOptions = [
        { label: "Estadisticas", value: "null" },
        { label: "Goleadores", value: "/goleadores" },
        { label: "FairPlay", value: "/fair-play" }
    ];

    return (
        <div className="navbar">
            <div className="navbar-left">
                <a href="https://instagram.com/octavohandball?igshid=MzRlODBiNWFlZA==" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com/octavojugadorhb?t=zMcb8UvHkBVBk-POekHLJA&s=09" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="https://www.twitch.tv/octavojugadorhb?sr=a" className="social-icon"><i className="fab fa-twitch"></i></a>
                <a href="https://youtube.com/@octavojugadorhandball5836" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="navbar-right">
                <Link href="/noticias">Noticias</Link>
                <Link href="/seleccion">Seleccion</Link>
                <DropdownNavBar options={navOptions} />
                <Link href="/calendario">Calendario</Link>
                <Link href="/entrevistas">Entrevistas</Link>
                <Link href="/galeria">Galeria</Link>
            </div>
        </div>
    );
}
