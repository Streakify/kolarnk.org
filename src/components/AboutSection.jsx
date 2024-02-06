import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const [t,i18n]=useTranslation("global")
  // State to track the selected language
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');
  
  // Function to handle language change
  const handleChangeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    // Save the selected language in local storage
    localStorage.setItem('language', lang);
  };
  
  // useEffect to set the language on component mount
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);
    const handleIconClick = () => {
      // Handle the click event here, e.g., navigate to a specific page or perform an action
      console.log('Icon clicked!');
    };
  
  const sectionStyle = {
    backgroundImage: 'url(https://images.deccanherald.com/deccanherald/import/sites/dh/files/articleimages/2023/05/01/the-karnataka-assembly-credit-dh-file-photo-1214461-1682937165.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true)',
  };

  const imgBgStyle = {
    backgroundImage: 'url(assets/img/alt-services-2.jpg)',
  };

  return (
    <>
      <section id="about" className="about mt-4 mb-4">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img" style={sectionStyle}></div>
            <div className="col-lg-7">
            <h2>{t("about.header")}</h2>
              <div className="our-story">
              <h4>{t("about.year")}</h4>
              <h3>{t("about.storyhead")}</h3>
                <p>{t("about.storypara")}
                </p>
                <div className="watch-video d-flex align-items-center position-relative">
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
              <h3>{t("about.header1")}</h3>
              <p>{t("about.para2")}
              </p>
              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4><a href="/" className="stretched-link">{t("about.subhead")}</a></h4>
                  <p>{t("about.subpara")}
                  </p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="/" className="stretched-link">{t("about.subhead2")}</a></h4>
                  <p>{t("about.subpara2")}
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
