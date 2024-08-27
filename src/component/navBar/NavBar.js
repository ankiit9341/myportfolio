import React from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#183D3D'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="home" smooth={true} duration={1000}>
          {/* <img id='logo' src={logo} alt="logo" /> */}
          <h1 className='logo'>ANKIT.</h1>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="introduction" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-100} style={{color:'#EEF5FF'}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-100} style={{color:'#EEF5FF'}}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="Project" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-100} style={{color:'#EEF5FF'}}>Project</Link>
            </li>
            <li className="nav-item">
              <Link to="skills" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-100} style={{color:'#EEF5FF'}}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} className="nav-link contact" activeClass="active" spy={true} offset={-100} style={{color:'#EEF5FF'}}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
