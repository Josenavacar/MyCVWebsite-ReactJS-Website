import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(
            textRef.current, { 
                showCursor: true, 
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Student', 'Engineer', 'Lover' ] 
        });

    }, [])
    return (
        <div className="intro" id="intro">
        
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jose Navarrete Carbonell</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
            </div>

            <a href="#portfolio">
                <img src="assets/arrow_down.png" alt=""></img>
            </a>
        </div>
    )
}
