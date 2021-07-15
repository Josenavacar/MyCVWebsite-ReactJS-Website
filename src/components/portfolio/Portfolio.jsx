import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { featuredPortfolio, webappPortfolio, gamedevPortfolio, csharpPortfolio, cPortfolio } from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "game",
            title: "Game Dev"
        },
        {
            id: "C#",
            title: "C#"
        },
        {
            id: "C",
            title: "C"
        }
    ];

    useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webappPortfolio);
                break;
            case "game":
                setData(gamedevPortfolio);
                break;
            case "C#":
                setData(csharpPortfolio);
                break;
            case "C":
                setData(cPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>

            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <a href={d.link}>
                            <img 
                                src= {d.img}
                                alt=""
                            />
                            <h3 href={d.link}>{d.title}</h3>
                        </a>
                    </div>
                ))}
                
            </div>
        </div>
    )
}
 