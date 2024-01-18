import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='' style={{ marginBottom: 10, height: 20 }}>
      <nav className="navbar navbar-light">
        <p>{t('header.message')}</p>
        <a className="navbar-brand">{t('navbar.title')}</a>
        <div style={{ height: 10, fontSize: 10 }}>
          <p onClick={() => changeLanguage('kn')}>Kannada</p>
          <p onClick={() => changeLanguage('en')}>English</p>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
