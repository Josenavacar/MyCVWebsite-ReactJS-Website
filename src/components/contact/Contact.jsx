import {GitHub, Person, Mail, PhoneAndroid} from "@material-ui/icons"
import "./contact.scss"

export default function Contact() {

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">

                <div class="contact-info">
                    <div class="card">
                        <Mail className="icon"/>
                        <p>jnavacar1998@gmail.com</p>
                    </div>
                    <div class="card">
                        <GitHub className="icon"/>
                        <p><a href="https://github.com/jnavacar" style={{textDecoration: 'none', color: 'white'}} target="_blank" rel="noreferrer">GitHub</a></p>
                    </div>

                    <div class="card">
                        <Person className="icon"/>
                        <p><a href="https://drive.google.com/file/d/1etCyUF4W5M0xe7uRPbFu_CLJhJETtOyg/view?usp=sharing" style={{textDecoration: 'none', color: 'white'}} target="_blank" rel="noreferrer">View Resume</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
