import { useState } from "react";
import {GitHub, Person, Mail, PhoneAndroid, MicNone} from "@material-ui/icons"
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    }

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
                        <PhoneAndroid className="icon"/>
                        <p>+31 615 392 591</p>
                    </div>

                    <div class="card">
                        <GitHub className="icon"/>
                        <p><a href="https://github.com/jnavacar" style={{textDecoration: 'none', color: 'white'}} target="_blank" rel="noreferrer">GitHub</a></p>
                    </div>

                    <div class="card">
                        <Person className="icon"/>
                        <p><a href="https://github.com/jnavacar" style={{textDecoration: 'none', color: 'white'}} target="_blank" rel="noreferrer">View Resume</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
