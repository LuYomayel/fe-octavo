import { New } from "../components/home/New";
import '../styles/HomePage.css';
export function HomePage() {
    const news = [
        {
            title: 'SEDALO CAMPEON DESPUES DE 11 AÑOS',
            description: 'Crónica de un grito anunciado: SEDALO se consagró campeón tras ganarle en la última fecha a AACF Quilmes en la Casa del Handball por 19-34, abrochando un semestre y campeonato sobresaliente. Las de Lanús Oeste fueron campeonas de punta a punta y se consagraron con un equipo plagado de Juveniles y Juniors, a excepción de una jugadora, tras 11 años. Por el lado de River Plate, venció previamente a VILO 31-20 en lo que fue el partido despedida de Delfina Ojea que marcha a España, sellando también un impecable semestre.',
            image: '/src/assets/bg-new.png',
        },
        {
            title: 'PARTIDAZO EN EL GLOBO',
            description: 'Por la fecha 12 del apertura 2023, Ferro necesitaba ganar para quedar lider del torneo a falta de dos fechas y Argentinos Juniors LO BAJO.',
            image: '/src/assets/sm-new.png'
        },
        {
            title: 'PARTIDAZO EN EL GLOBO',
            description: 'Por la fecha 12 del apertura 2023, Ferro necesitaba ganar para quedar lider del torneo a falta de dos fechas y Argentinos Juniors LO BAJO.',
            image: '/src/assets/sm-new.png'
        }
    ]
    return (
        <div className="home-page">
            <div className="main">
                <New title={news[0].title} description={news[0].description} img={news[0].image}/>
            </div>
            <div className="side">
                {news.slice(1).map((item, index) => (
                    <New key={index} title={item.title} description={item.description} img={item.image}/>
                ))}
            </div>
        </div>
    )
}