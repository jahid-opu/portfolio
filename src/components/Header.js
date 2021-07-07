import React from 'react';
import background from '../img/programmer-bg.jpg';

const Header = () => {
    return (
        <section className="header-section text-center d-flex align-items-center">
            <div className="container">
          <h1>Hello, I'm <span className="orange-color"> Jahid Opu</span></h1>
          <p>A Curious MERN Stack Developer</p>
          <button>Download Resume</button>
          </div>
        </section>
    );
};

export default Header;