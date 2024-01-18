import React from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'

export default function PageNotFound() {
  return (
    <div>
      <Header2 name="Page Not Found"/>
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
    }}>
      <div>
        <h1 style={{ fontSize: '6rem', color: '#dc3545', marginBottom: '20px' }}>404</h1>
        <p style={{ fontSize: '1.5rem', color: '#6c757d' }}>Oops! Page not found.</p>
        <p style={{ fontSize: '1rem', color: '#6c757d' }}>The page you are looking for might have been removed,
          had its name changed, or is temporarily unavailable.</p>
      </div>
    </div>
      <Footer/>
    </div>
  )
}
