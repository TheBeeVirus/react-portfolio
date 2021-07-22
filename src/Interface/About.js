import React from 'react';
import Typed from 'react-typed';

const About = () => {
    return (
        <section id="about" className="d-flex min-vh-100">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center mb-3 hero-info">
                    <h1>Hello, I am <span className="text-about-gradient">Jd Beecham.</span></h1>

                    <h2 className="mb-5">Roles I can do are 
                        <Typed 
                            className="typed-text"
                            strings = {[" iOS Developer.", " Frontend Developer.", " Backend Developer.", " Game Developer.", " Softare Tester."]}
                            typeSpeed={30}
                            backSpeed={60}
                            smartBackspace
                            loop
                        /> 
                    </h2>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button class="btn btn-outline-primary  me-md-4 mt-5" type="button">How to contact</button>
                        <button class="btn btn-outline-primary mt-5" type="button">Download Resume</button>
                    </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center about-info">
                    <p>I am a Developer that has a diverse background in different areas. I was last working as a Regional Field Service Technician until I lost my job due to COVID. I was responsible for troubleshooting, installing, and repairing eye Doctor’s and Surgeon’s equipment across four states. I am currently trying to switch fields and get back into a career in software. I worked before as a software tester and freelance frontend developer in the past. I have a degree in programming, but don’t use it. I miss programming, so I did a few online bootcamps to brush up on the technologies I missed out on. I am going to start at the bottom and work my way up to the position I want, which is either Backend Developer or iOS Developer. I enjoy both of those areas the most.</p>
                </div>
            </div>
        </section>
    )
}

export default About
