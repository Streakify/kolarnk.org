import React from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import Team from '../components/Team'
import DepatmentsAbout from '../components/DepartmentsAbout'
import ProjectsCard from '../components/ProjectsCard'

export default function Departments() {
  return (
    <div>
      <Header2 name="Departments"/>
<DepatmentsAbout/>
      <Team/>
      <ProjectsCard/>
      <Footer/>
    </div>
  )
}
