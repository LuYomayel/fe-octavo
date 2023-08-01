import { New } from "../components/home/New";
import '../styles/HomePage.css';
export function HomePage() {
    const news = [
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas voluptatem, quo amet adipisci laudantium libero ratione vel modi excepturi enim quidem sapiente? Beatae ea iusto minima? Ex, autem! Nisi.',
            image: '/src/assets/bg-new.png'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas voluptatem, quo amet adipisci laudantium libero ratione vel modi excepturi enim quidem sapiente? Beatae ea iusto minima? Ex, autem! Nisi.',
            image: '/src/assets/sm-new.png'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas voluptatem, quo amet adipisci laudantium libero ratione vel modi excepturi enim quidem sapiente? Beatae ea iusto minima? Ex, autem! Nisi.',
            image: '/src/assets/sm-new.png'
        },
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