import React from 'react';
import './Introduction.css';
import photo from '../../asset/myphoto.jpg';

export default function Introduction() {
  return (
    <div className="intro" id='introduction'>
      <div className="left-side">
        <span className="hello">Hello,</span>
        <h1 className='myself'>
          I am <span className="name">Ankit</span> <br />
          Web Deve
          <span className="moving">
            <span className="typing-text">l</span>
            <span className="typing-text">o</span>
            <span className="typing-text">p</span>
            <span className="typing-text">e</span>
            <span className="typing-text">r</span>
          </span>
        </h1>
      </div>
      <div className="right-side">
        <img className='img-fluid' src={photo} alt="my-photo" />
      </div>
    </div>
  );
}
