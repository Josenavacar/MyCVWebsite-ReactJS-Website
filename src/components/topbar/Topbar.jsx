import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">jnavacar.</a>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>jnavacar1998@gmail.com</span>
                        
                    </div>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <a style={{textDecoration: 'none'}} href="https://drive.google.com/file/d/1Wmt4kLdu-l9YB007ZS_ihqGQeoKlmv4R/view?usp=sharing" target="_blank" rel="noreferrer" className="cv"><span>Resume</span></a>
                        
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
