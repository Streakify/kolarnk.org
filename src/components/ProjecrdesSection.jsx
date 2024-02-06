import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectDescription = () => {
  const [t, i18n] = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');

  const handleChangeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const sectionStyle = {
    backgroundImage: 'url(https://images.deccanherald.com/deccanherald/import/sites/dh/files/articleimages/2023/05/01/the-karnataka-assembly-credit-dh-file-photo-1214461-1682937165.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true)',
    height: '100px',
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    // borderRadius:'-90px'

  };

  const descrDesStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    marginTop: '-50px', // Adjust as needed
    boxShadow: '0 20px 20px rgba(0, 0, 0, 0.4)',
    zIndex: '1', // Ensure text stays above image
    height:'200px',
    marginTop:'10px'
  };

  const headingStyle = {
    color: '#333333',
    fontSize: '28px',
    // marginBottom: '20px',
  };

  const paraStyle = {
    color: '#666666',
    lineHeight: '1.6',
  };

  const watchVideoStyle = {
    marginTop: '20px',
  };

  return (
    <>
      <section id="about" className="description">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 descr-img" style={sectionStyle}></div>
            <div className="col-lg-7 descr-des" style={descrDesStyle}>
              <h2 style={headingStyle}>{t("about.header")}</h2>
              <div className="descr.para" style={paraStyle}>
                <p>{t("about.storypara")}</p>
                <div className="watch-video d-flex align-items-center position-relative" style={watchVideoStyle}>
                  <i className="bi bi-play-circle"></i>
                  <a href="https://www.youtube.com/watch?v=Uw1Z3w-kyWA" className="glightbox stretched-link">{t("about.video")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDescription;
