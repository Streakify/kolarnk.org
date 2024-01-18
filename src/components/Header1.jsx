import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header1 = () => {

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


 
  return (
    <header id="header" className="header d-flex align-items-center " style={{marginTop:10}}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <div className="logo d-flex member-img">
          <div className='d-none d-md-flex' style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
            <img className="img-fluid" style={{ alignSelf: "center" }} src="https://planning.karnataka.gov.in/frontend/opt1/images/cm_logo/chief_minister_of_karrnataka_icon.png?1704525943" alt="Chairman" />
            <div className="">
              <h4 style={{ color: 'white', fontSize: 7, textAlign: "center" }}>Shri Siddaramaiah</h4>
              <p style={{ color: 'white', fontSize: 7, textAlign: "center", marginTop: -10, fontWeight: "bold" }}> Chairman</p>
            </div>
          </div>

          <div className='d-flex align-items-center'>
            <a href="/">
              <h1 style={{ fontSize: 20, marginLeft: 20 }}>{t("header.title.message")}<span>.</span></h1>
            </a>
          </div>
        </div>

        <nav id="" className="navbar d-sm-none d-md-flex">
          <ul>
            <li><a href="/" className="active">{t("header.menus.menu1.message")}</a></li>
            <li><a href="about">{t("header.menus.menu2.message")}</a></li>
            <li className="dropdown">
              <a href="services">
                <span>{t("header.menus.menu3.message")}</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
                <li><a href="training">{t('header.menus.menu3.submenus.submenu1.message')}</a></li>
                <li><a href="production">{t('header.menus.menu3.submenus.submenu2.message')}</a></li>
                <li><a href="construction">{t('header.menus.menu3.submenus.submenu3.message')}</a></li>
              </ul>
            </li>
            <li><a href="projects">{t('header.menus.menu4.message')}</a></li>
           
            <li className="dropdown">
              <a href="administration">
                <span>{t('header.menus.menu5.message')}</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
              <li><a href="administration">{t('header.menus.menu5.submenus.submenu1.message')}</a></li>
                  <li><a href="rti">{t('header.menus.menu5.submenus.submenu4.message')}</a></li>
            <li><a href="meetings">{t('header.menus.menu5.submenus.submenu5.message')}</a></li>
              </ul>
            </li>
         
            <li><a href="contact">{t('header.menus.menu6.message')}</a></li>
            <li><button type="button" onClick={() => handleChangeLanguage("kn")}>ಕನ್ನಡ</button></li>
            <li><button type="button" onClick={() => handleChangeLanguage("en")}>English</button></li>
            </ul>
        </nav>

        <div className="logo  member-img" style={{ marginLeft: 20 }}>
        <div className='d-flex d-md-none' style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", cursor: "pointer" }} onClick={handleIconClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" style={{ fill: 'white' }}>
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        </div>
          <div className='d-none d-lg-flex' style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
            <img className="img-fluid" style={{ alignSelf: "center" }} src="https://planning.karnataka.gov.in/frontend/opt1/images/cm_logo/chief_minister_of_karrnataka_icon.png?1704525943" alt="Chairman" />
            <div className="">
              <h4 style={{ color: 'white', fontSize: 7, textAlign: "center" }}>Shri Siddaramaiah</h4>
              <p style={{ color: 'white', fontSize: 7, textAlign: "center", marginTop: -10, fontWeight: "bold" }}> Executive Chairman</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
