import React from 'react';

const Breadcrumbs = () => {
  return (
    <>
     

      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url("../assets/img/hero-carousel/hero-carousel-2.jpg")'}}>
          <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
            <h2>About</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>About</li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
};

export default Breadcrumbs;
