import React from 'react';
import { useTranslation } from 'react-i18next';
const DepatmentsAbout = () => {
  const [t,i18n]=useTranslation("global")

  return (
    <>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row position-relative">
          <div className="col-lg-7">
            <h2>Kolar Nirmithi Kendra</h2>
            <div className="our-story">
              <h4>Est 1988</h4>
              <h3>Our Story</h3>
              <p>
              Kolar is a place of great antiquity , but has passed through so many vicissitudes and was so much devastated by warfare and what little now remains in it is ancient. The history of Kolar is said to be associated with the epic age, which recalls many legend.
              </p>
              {/* <ul>
                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
              </ul> */}
              
             

              
              <div className="watch-video d-flex align-items-center position-relative">
                <i className="bi bi-play-circle"></i>
                <a href="https://www.youtube.com/watch?v=Uw1Z3w-kyWA" className="glightbox stretched-link">Watch Video</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


</>
  );
};

export default DepatmentsAbout;
