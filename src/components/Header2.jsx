import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from './SideBar';


export default function Header2(props) {
  const [t,i18n]=useTranslation("global")
// State to track the selected language
const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');
const [showSidebar, setShowSidebar] = useState(false);
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



useEffect(() => {
  i18n.changeLanguage(selectedLanguage);
}, [selectedLanguage, i18n]);

const handleIconClick = () => {
  // Toggle the state to open/close the sidebar
  setIsSidebarOpen(!isSidebarOpen);
};

const handleDropdownClick = (dropdownNumber) => {
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
    <>
    
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
                {/* <li><a href="production">{t('header.menus.menu3.submenus.submenu2.message')}</a></li> */}
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
            <li className="dropdown">
              <a>
                <span>{t("header.Lang.message")}</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
              <li><a type="button" onClick={() => handleChangeLanguage("kn")}>ಕನ್ನಡ</a></li>
            <li><a type="button" onClick={() => handleChangeLanguage("en")}>English</a></li>
              </ul>
            </li>
            </ul>
        </nav>

        <div className="logo  member-img" style={{ marginLeft: 20 }}>
        <div className='d-flex d-md-none' style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", cursor: "pointer" }} onClick={handleIconClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" style={{ fill: 'white' }}>
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>

        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      {/* {!isSidebarOpen && (
        <div className="handle" onMouseDown={handleIconClick}>
          {/* Handle Icon for dragging */}
          {/* <span className="handle-icon"></span> */}
        {/* </div> */}
      {/* )}  */}

      {/* <div className="icon-container" onClick={handleIconClick}>
        {/* Menu Icon */}
        {/* <div className="menu-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div> */} 

      {/* Your sidebar content here */}
      <div className="sidebar-content">
        <ul>
          <li><a href="/" className="active link">{t("header.menus.menu1.message")}</a></li>
          <li><a href="about" className="link">{t("header.menus.menu2.message")}</a></li>
          <li className="dropdown" onClick={() => handleDropdownClick(1)}>
            <a className="link">
              <span>{t("header.menus.menu3.message")}</span> <i className={getDropdownIcon(1) + " dropdown-indicator"}></i>
            </a>
            {showDropdown1 && (
              <ul>
                <li><a href="training" className="link">{t('header.menus.menu3.submenus.submenu1.message')}</a></li>
                <li><a href="production" className="link">{t('header.menus.menu3.submenus.submenu2.message')}</a></li>
                <li><a href="construction" className="link">{t('header.menus.menu3.submenus.submenu3.message')}</a></li>
              </ul>
            )}
          </li>
          <li><a href="projects" className="link">{t('header.menus.menu4.message')}</a></li>
          <li className="dropdown" onClick={() => handleDropdownClick(2)}>
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
          <li className="dropdown" style={{ color: 'white' }}>
              <a>
                <span>{t("header.Lang.message")}</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
              <li><a type="button" onClick={() => handleChangeLanguage("kn")}>ಕನ್ನಡ</a></li>
            <li><a type="button" onClick={() => handleChangeLanguage("en")}>English</a></li>
              </ul>
            </li>
        </ul>
      </div>
    </div>
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
      <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'url("../assets/img/hero-carousel/hero-carousel-2.jpg")'}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">


        {/* <h2>{t("header2.title.message")}{props.name}</h2> */}
        <h2>{props.name}</h2>
          <ol>
          <li><a href="/" >{t("header.menus.menu1.message")}</a></li>

            {/* <li>{t("header2.title2.message")}{props.name}</li> */}
          <li>{props.name}</li>
          </ol>
        </div>
      </div>
    </main>
    </>
  )
}
