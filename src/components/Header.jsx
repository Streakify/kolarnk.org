import React from 'react';

const Header = () => {
  return (

    <header id="header" class="header d-flex align-items-center">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  
        <a href="" class="logo d-flex align-items-center">
       
          <h1>Kolar Nirmithi Kendra<span>.</span></h1>
        </a>
  
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="/" class="active">Home</a></li>
            <li><a href="about">About</a></li>
            <li class="dropdown"><a href="services"><span>Services</span> <i
              class="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="training">Training</a></li>
            
            <li><a href="production">Production</a></li>
            <li><a href="construction">Construction</a></li>
          
          </ul>
        </li>
            <li><a href="projects">Projects</a></li>
            <li><a href="administration">Administration</a></li>
            <li class="dropdown"><a href="departments"><span>Departments</span> <i
                  class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="departments">Civil</a></li>
                
                <li><a href="#">Etc</a></li>
                
              </ul>
            </li>
            <li><a href="rti">RTI</a></li>
            <li><a href="meetings">Meetings</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </nav>
  
      </div>
    </header>
  );
};

export default Header;
