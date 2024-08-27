import React from 'react';
import "./Project.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import todo from '../../asset/to-do.jpg';
import ytclone from '../../asset/youtube.webp';

export default function Project() {
  return (
    <div className='Project' id='Project' style={{height:'100vh'}}>
      <div className='project-card ytclone-card'>
        <img className='project-img' src={ytclone} alt="YouTube Clone" />
        <div className='project-details'>
          <h3>YouTube Clone</h3>
          <p>Made using React with concepts like Router, Redux, and Tailwind CSS.</p>
        </div>
        <a href="https://66cdfc2e54a43e395e10c343--courageous-pudding-3fe4f2.netlify.app/" target='_blank' rel='noopener noreferrer'>
          <FaExternalLinkAlt className="external-link" />
        </a>
      </div>
      <div className='project-card todo-card'>
        <img className='project-img' src={todo} alt="To-Do App" />
        <div className='project-details'>
          <h3>To-Do App</h3>
          <p>Made using HTML, CSS, React, and Bootstrap.</p>
        </div>
        <a href="https://ankiit9341.github.io/todo-list/" target='_blank' rel='noopener noreferrer'>
          <FaExternalLinkAlt className="external-link" />
        </a>
      </div>
    </div>
  );
}
