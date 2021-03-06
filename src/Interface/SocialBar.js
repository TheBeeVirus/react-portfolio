import React from 'react';
import './CSS/SocialBar.css';

const SocialBar = () => {
    return (
        <div className="icon-bar">
        <a href="https://www.linkedin.com/pub/jd-beecham/5b/44/506" className="linkedin" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/TheBeeVirus" className="github" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a> 
        <a href="https://twitter.com/TheBeeVirus" className="twitter" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://discordapp.com/users/TheBeeVirus#9177/" className="discord" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
        </div>
    );
}

export default SocialBar