import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const [t, i18n] = useTranslation('global');
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const handleChangeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleIconClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownClick = (dropdownNumber) => {
    // Prevent closing the sidebar if the clicked item is the "Contact" link
    if (dropdownNumber === 0) {
      return;
    }

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
    return showDropdown(dropdownNumber) ? 'bi bi-chevron-up rotate' : 'bi bi-chevron-down';
  };

  const showDropdown = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        return showDropdown1;
      case 2:
        return showDropdown2;
      case 3:
        return showDropdown3;
      default:
        return false;
    }
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      {!isSidebarOpen && (
        <div className="handle" onMouseDown={handleIconClick}>
          <span className="handle-icon"></span>
        </div>
      )}

      <div className="icon-container" onClick={handleIconClick}>
        <div className="menu-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>

      <div className="sidebar-content">
        <ul>
          <li><a href="/" className="active link">{t('header.menus.menu1.message')}</a></li>
          <li><a href="about" className="link">{t('header.menus.menu2.message')}</a></li>
          <li className="dropdown" onClick={() => handleDropdownClick(1)}>
            <a className="link">
              <span>{t('header.menus.menu3.message')}</span> <i className={getDropdownIcon(1) + ' dropdown-indicator'}></i>
            </a>
            {showDropdown1 && (
              <ul>
                <li><a href="training" className="link">{t('header.menus.menu3.submenus.submenu1.message')}</a></li>
                <li><a href="production" className="link">{t('header.menus.menu3.submenus.submenu2.message')}</a></li>
                <li><a href="construction" className="link">{t('header.menus.menu3.submenus.submenu3.message')}</a></li>
              </ul>
            )}
          </li>
          <li><a href="projects" className="">{t('header.menus.menu4.message')}</a></li>
          <li className="dropdown" onClick={() => handleDropdownClick(2)}>
            <a className="link">
              <span>{t('header.menus.menu5.message')}</span> <i className={getDropdownIcon(2) + ' dropdown-indicator'}></i>
            </a>
            {showDropdown2 && (
              <ul>
                <li><a href="administration" className="link">{t('header.menus.menu5.submenus.submenu1.message')}</a></li>
                <li><a href="rti" className="">{t('header.menus.menu5.submenus.submenu4.message')}</a></li>
                <li><a href="meetings" className="link">{t('header.menus.menu5.submenus.submenu5.message')}</a></li>
              </ul>
            )}
          </li>
         <li><a href="contact" className="link" onClick={() => handleDropdownClick(0)}>{t('header.menus.menu6.message')}</a></li>

          <li className="dropdown" onClick={() => handleDropdownClick(3)}>
            <a className="link">
              <span>{t('header.Lang.message')}</span> <i className={getDropdownIcon(3) + ' dropdown-indicator'}></i>
            </a>
            {showDropdown3 && (
              <ul>
                <li><button type="button" onClick={() => handleChangeLanguage('kn')} className="link">ಕನ್ನಡ</button></li>
                <li><button type="button" onClick={() => handleChangeLanguage('en')} className="link">English</button></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
