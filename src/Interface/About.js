import React from 'react';
import Typed from 'react-typed';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="hero-info">
                <h1>Hello, I am Jd Beecham.</h1>
                <Typed 
                    className="typed-text"
                    strings = {["iOS Developer", "Frontend Developer", "Backend Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                /> 

                <button type="button" class="btn btn-outline-primary">Contact Me</button>  
            </div>
        </div>
    )
}

export default About
