import React from 'react';
import Typed from 'react-typed';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="hero-info">
                <h1>Hello, I am Jd Beecham.</h1>
                <Typed 
                    className="typed-text"
                    strings = {["I am a iOS Developer.", "I am a Frontend Developer.", "I am a Backend Developer.", "I am a Game Developer.", "I am a Softare Tester."]}
                    typeSpeed={40}
                    backSpeed={60}
                    smartBackspace
                    loop
                /> 

                <button type="button" class="btn btn-outline-primary">Contact Me</button>  
            </div>
        </div>
    )
}

export default About
