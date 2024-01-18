import React from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/BreadCrumbs'
import Footer from '../components/Footer'
import AboutCard from '../components/CustomeNavigation/AboutCard'
import Header2 from '../components/Header2'
import AboutSection from '../components/AboutSection'
import Team from '../components/Team'

export default function About() {
  return (
        <>
        <Header2 name="About"/>
<AboutSection/>
<Team/>
      <Footer/>
     
      </>
  )
}
