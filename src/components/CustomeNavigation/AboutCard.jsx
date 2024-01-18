import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutCard = () => {
  const [t,i18n]=useTranslation("global")
  return (
    <section id="get-started" className="get-started section-bg">
      <div className="container">
        <div className="row justify-content-between gy-4">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
            <div className="content">
              <h3>{t("about.title")}</h3>
              <p>
              {t("about.description1")}
            </p>
            
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
            <div className="content">
            <h3></h3>
           
            <p>
             {t("about.description2")} </p>
            <p>
            {t("about.description3")}
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
