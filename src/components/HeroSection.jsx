import React from 'react';
import heroImage1 from '../assets/img/hero-carousel/hero-carousel-1.jpg';
import AboutCard from './CustomeNavigation/AboutCard';
import ProjectsCard from './ProjectsCard';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [t,i18n]=useTranslation("global")
  return (
    <div>
    <section id="hero" className="hero">
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">{t("header.carousel.title1")} <br/>
                <span>{t("header.carousel.title2")}</span>
              </h2>
              <p data-aos="fade-up">{t("header.carousel.description")}</p>
              <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started text-decoration-none" >Explore</a>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-item active" style={{ backgroundImage: `url("../assets/img/hero-carousel/hero-carousel-1.jpg")` }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url("../assets/img/hero-carousel/hero-carousel-2.jpg")' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url("../assets/img/hero-carousel/hero-carousel-3.jpg")' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url("../assets/img/hero-carousel/hero-carousel-4.jpg")' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url("../assets/img/hero-carousel/hero-carousel-5.jpg")' }}></div>

        <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>
      </div>
    </section>

  <AboutCard/>

  <ProjectsCard/>


    
  </div>
  );
};

export default HeroSection;
