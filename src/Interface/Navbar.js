import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">TheDigitalHive.com</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
}

export default Navbar
