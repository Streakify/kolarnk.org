import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Sidebar from './SideBar';

const Header1 = () => {
  const [t, i18n] = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

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
    // Toggle the state to open/close the sidebar
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownClick = (dropdownNumber, event) => {
    // Prevent the sidebar from closing when clicking on the dropdown indicator
    const targetClasses = event.target.classList;
    if (targetClasses.contains('dropdown-indicator')) {
      event.stopPropagation();
    }
  
    // Toggle the state of the clicked dropdown
    switch (dropdownNumber) {
      case 1:
        setShowDropdown1(!showDropdown1);
        break;
      case 2:
        setShowDropdown2(!showDropdown2);
        break;
      case 3:
        setShowDropdown3(!showDropdown3);
        break;
      default:
        break;
    }
  };

  const getDropdownIcon = (dropdownNumber) => {
    // Return the appropriate icon based on the dropdown state
    switch (dropdownNumber) {
      case 1:
        return showDropdown1 ? "bi bi-chevron-up" : "bi bi-chevron-down";
      case 2:
        return showDropdown2 ? "bi bi-chevron-up" : "bi bi-chevron-down";
      case 3:
        return showDropdown3 ? "bi bi-chevron-up" : "bi bi-chevron-down";
      default:
        return "bi bi-chevron-down";
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center" style={{ marginTop: 10 }}>
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

        {/* Navbar and Sidebar */}
        <nav id="" className="navbar d-md-none">
          <div className="menu-icon" onClick={handleIconClick}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </nav>
        
        {/* Right Image */}
        <div className="logo member-img d-none d-lg-flex">
          <img className="img-fluid" src="https://planning.karnataka.gov.in/frontend/opt1/images/cm_logo/chief_minister_of_karrnataka_icon.png?1704525943" alt="Chairman" />
          <div className="">
            <h4 style={{ color: 'white', fontSize: 7, textAlign: "center" }}>Shri Siddaramaiah</h4>
            <p style={{ color: 'white', fontSize: 7, textAlign: "center", marginTop: -10, fontWeight: "bold" }}> Executive Chairman</p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar d-md-none ${isSidebarOpen ? 'open' : ''}`}>
        <div className="icon-container">
          {/* Menu Icon */}
          <div className="menu-icon" onClick={handleIconClick}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        {/* Your sidebar content here */}
        <div className="sidebar-container">
          <h1 className="sidebar-heading">Menu</h1>
          <div className="sidebar-content">
            <ul>
              <li><a href="/" className="active link">{t("header.menus.menu1.message")}</a></li>
              <li><a href="about" className="link">{t("header.menus.menu2.message")}</a></li>
              <li className="dropdown" onClick={(event) => handleDropdownClick(1, event)}>
                <a className="link">
                  <span>{t("header.menus.menu3.message")}</span> <i className={getDropdownIcon(1) + " dropdown-indicator"}></i>
                </a>
                {showDropdown1 && (
                  <ul>
                    <li><a href="training" className="link">{t('header.menus.menu3.submenus.submenu1.message')}</a></li>
                    {/* <li><a href="production" className="link">{t('header.menus.menu3.submenus.submenu2.message')}</a></li> */}
                    <li><a href="construction" className="link">{t('header.menus.menu3.submenus.submenu3.message')}</a></li>
                  </ul>
                )}
              </li>
              <li><a href="projects" className="link">{t('header.menus.menu4.message')}</a></li>
              <li className="dropdown" onClick={(event) => handleDropdownClick(2, event)}>
                <a className="link">
                  <span>{t('header.menus.menu5.message')}</span> <i className={getDropdownIcon(2) + " dropdown-indicator"}></i>
                </a>
                {showDropdown2 && (
                  <ul>
                    <li><a href="administration" className="link">{t('header.menus.menu5.submenus.submenu1.message')}</a></li>
                    <li><a href="rti" className="link">{t('header.menus.menu5.submenus.submenu4.message')}</a></li>
                    <li><a href="meetings" className="link">{t('header.menus.menu5.submenus.submenu5.message')}</a></li>
                  </ul>
                )}
              </li>
              <li><a href="contact" className="link">{t('header.menus.menu6.message')}</a></li>
              <li className="dropdown">
                <a className="link">
                  <span>{t("header.Lang.message")}</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li><a type="button" onClick={() => handleChangeLanguage("kn")} className="link">ಕನ್ನಡ</a></li>
                  <li><a type="button" onClick={() => handleChangeLanguage("en")} className="link">English</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
