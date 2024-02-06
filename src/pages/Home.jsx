




import React from 'react';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DepartmentsSection from '../components/CustomeNavigation/Departments';
import ProjectsCard from '../components/ProjectsCard';
import Footer from '../components/Footer';
import Team from '../components/Team';
import Header1 from '../components/Header1';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div>
     
      <Header1/>
      <HeroSection/>
      <ProjectsCard/>
   
      <DepartmentsSection/>
      <Footer/>
      
    </div>
  );
};

export default Home;
