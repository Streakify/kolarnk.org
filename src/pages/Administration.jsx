import React from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import ManagementMap from '../components/Management'

export default function Administration() {
  return (
   <>
   <Header2 name="Administration"/>
   <div style={{flex:1,justifyContent:"center",alignContent:"center",alignItems:"center"}}>
    <h2 style={{textAlign:"center"}}>Image</h2>
   </div>
   <Footer/>
   </>
  )
}
