import "./topbar.scss"
import {Person, Mail, PhoneAndroid} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">jnavacar.</a>
                    <div className="itemContainer">
                        <PhoneAndroid className="icon"/>
                        <span>+31 615 392 591</span>

                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>jnavacar1998@gmail.com</span>
                        
                    </div>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <a href="" className="cv"><span>Download Resume</span></a>
                        
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
