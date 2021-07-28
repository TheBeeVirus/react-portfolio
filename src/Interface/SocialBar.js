import React from 'react';
import './CSS/SocialBar.css';

const SocialBar = () => {
    return (
        <div className="icon-bar">
        <a href="/#" className="facebook"><i className="fab fa-facebook"></i></a> 
        <a href="/#" className="twitter"><i className="fab fa-twitter"></i></a> 
        <a href="/#" className="google"><i className="fab fa-google"></i></a> 
        <a href="/#" className="linkedin"><i className="fab fa-linkedin"></i></a>
        <a href="/#" className="youtube"><i className="fab fa-youtube"></i></a> 
        </div>
    );
}

export default SocialBar