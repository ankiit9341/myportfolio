import React from 'react';
import logo from '../../asset/logo.png';
import './NavBar.css';
import { Link } from 'react-scroll';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home" smooth={true} duration={1000}>
          <img id='logo' src={logo} alt="logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="introduction" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-70}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-70}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="skills" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-70}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} className="nav-link contact" activeClass="active" spy={true} offset={-20}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
