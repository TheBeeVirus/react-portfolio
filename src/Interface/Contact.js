import React from 'react';
import './CSS/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="d-flex min-vh-100">
            <div className="container py-2">
                <div className="row">
                    <div id="pageHeaderTitle" className="h1 text-center text-light">How to Contact Me?</div>
                    <h1 className="col-12 fs-4 p-5 text-center">You can feel free to contact me through LinkedIn, Twitter, GitHub or Discord.</h1>
                    <a href="https://www.linkedin.com/pub/jd-beecham/5b/44/506" className="col-3 text-center fs-1" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/TheBeeVirus" className="col-3 text-center fs-1" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/TheBeeVirus" className="col-3 text-center fs-1" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://discordapp.com/users/TheBeeVirus#9177/" className="col-3 text-center fs-1" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a> 
                </div>
            </div>
        </section>
    )
}

export default Contact
