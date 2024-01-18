// CustomNavigation.jsx

import React from 'react';
import './Customenav.css'; // Import your custom CSS file for styling

const CustomNavigation = () => {
  return (
    <nav className="custom-navbar">
      <div className="logo">
        <a href="#home">Construction Company</a>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#departments">Departments</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#rti">RTI</a></li>
      </ul>
    </nav>
  );
};

export default CustomNavigation;
