import React from 'react';

const AboutSection = () => {
  const sectionStyle = {
    backgroundImage: 'url(https://images.deccanherald.com/deccanherald/import/sites/dh/files/articleimages/2023/05/01/the-karnataka-assembly-credit-dh-file-photo-1214461-1682937165.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true)',
  };

  const imgBgStyle = {
    backgroundImage: 'url(assets/img/alt-services-2.jpg)',
  };

  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img" style={sectionStyle}></div>
            <div className="col-lg-7">
              <h2>Kolar Nirmithi Kendra</h2>
              <div className="our-story">
                <h4>Est 1988</h4>
                <h3>Our Story</h3>
                <p>
                  Kolar is a place of great antiquity, but has passed through so many vicissitudes and was so much devastated by warfare and what little now remains in it is ancient. The history of Kolar is said to be associated with the epic age, which recalls many legends.
                </p>
                <div className="watch-video d-flex align-items-center position-relative">
                  <i className="bi bi-play-circle"></i>
                  <a href="https://www.youtube.com/watch?v=Uw1Z3w-kyWA" className="glightbox stretched-link">Watch Video</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="alt-services-2" className="alt-services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Nirmithi in Karnataka</h3>
              <p>
                Nirmithi in Karnataka: Government of Karnataka also took the initiative and started implementing the Scheme from the year 1990 onwards by establishing a Kendra in each district of Karnataka. Initially, the scheme was not appreciated well, and the momentum of Building Centre activities went at a snail pace rate. However, with the intervention of KARNIK as a state-level nodal agency for the development of Building center activities in Karnataka, the momentum started picking up from the year 1994 onwards.
              </p>
              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4><a href="/" className="stretched-link">KARNIK</a></h4>
                  <p>
                    Was established by the Government of Karnataka as a state-level Building Centre in the year 1991 with the object of giving a pull up to the building center development activities in the state. The main objective is to monitor, oversee the performance and also see that this scheme takes off on a positive note and sustains on a continuous basis.
                  </p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="/" className="stretched-link">The Nirmithi Movement</a></h4>
                  <p>
                    The Research and Development work in respect of Building Technology carried out by various Research bodies, engineering colleges, Individual professionals like Laurie Baker etc., has significantly contributed to the development of innovative, Cost-effective, Energy-Efficient Building Technology which were hitherto remained in the laboratories only. A need for the application of Cost-Effective Technology was felt during the 80's. HUDCO took the initiative in giving further pull up to the building Centre movement for the transfer of technology from "LAB TO LAND" by getting the financial assistance from the Government of India in grounding the scheme at the National Level.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 img-bg" style={imgBgStyle} data-aos="zoom-in" data-aos-delay="100"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
