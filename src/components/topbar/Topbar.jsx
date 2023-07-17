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
                        <a style={{textDecoration: 'none'}} href="https://drive.google.com/file/d/1f0eCHFvrWijJHmRn33VNBr5GKFmJ9diG/view?usp=sharing" target="_blank" rel="noreferrer" className="cv"><span>Curriculum Vitae</span></a>
                        
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
