import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import ManagementMap from '../components/Management';

export default function Administration() {
  return (
    <>
      <Header2 name="Administration" />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
     
        <div style={imageContainerStyle}>
        <div style={{
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: '75.0000%',
  paddingBottom: 0,
  boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
  marginTop: '1.6em',
  marginBottom: '0.9em',
  overflow: 'hidden',
  borderRadius: '8px',
  willChange: 'transform',
}}>
  <iframe
    loading="lazy"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      border: 'none',
      padding: 0,
      margin: 0,
    }}
    src="https://www.canva.com/design/DAF63miwKuw/view?embed"
    allowFullScreen
    allow="fullscreen"
  ></iframe>
</div>
<a
  href="https://www.canva.com/design/DAF63miwKuw/view?utm_content=DAF63miwKuw&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
  target="_blank"
  rel="noopener"
>
 
</a>

        </div>
      
      
      </div>
      <Footer />
    </>
  );
}

const imageContainerStyle = {
  position: 'relative',
  maxWidth: '600px',
  width: '100%',
  margin: '20px 0',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
};

const designElementStyle = {
  position: 'absolute',
  height: '50px',
  width: '20%',
  backgroundColor: '#007bff', // Adjust the color as needed
};

const headingStyle = {
  textAlign: 'center',
  marginTop: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
};