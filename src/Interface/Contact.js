import React from 'react';
import './CSS/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="d-flex min-vh-100">
            <div className="container py-2">
                <div class="row">
                    <div id="pageHeaderTitle" className="h1 text-center text-light">How to Contact Me?</div>
                    <h1 className="col-12 fs-4 p-5">Removed my form because of Bots, until I get time to add a bot checker, you can feel free to contact me through LinkedIn, Twitter, or GitHub.</h1>
                    <a href="https://www.linkedin.com/pub/jd-beecham/5b/44/506" className="col-4 text-center fs-1" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/TheBeeVirus" className="col-4 text-center fs-1" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/TheBeeVirus" className="col-4 text-center fs-1" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a> 
                </div>
            </div>
        </section>
    )
}

export default Contact
