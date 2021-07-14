import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Game Dev</li>
                <li>C#</li>
                <li>C</li>
            </ul>

            <div className="container">
                <div className="item">
                    <img src="assets/ticketwebsite.png" alt="" />
                    <h3>Ticket Website</h3>
                </div>
            </div>
        </div>
    )
}
 