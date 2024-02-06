import React from 'react';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const [t,i18n]=useTranslation("global")
    const linkStyle = {
        textDecoration: 'none', // Removing underline from links
      };
  return (
    <footer id="footer" className="footer linkStyle">
      <div className="footer-content position-relative">
        <div className="footercontainer">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>{t("header.title.message")}</h3>
                <p>
                  {t("footer.address.message")}
                  <br />
                  <br />
                  <br />
                  <strong>  {t("footer.phone.message")}</strong> {t("footer.phonenumber.message")}<br />
                  <strong> {t("footer.email.message")}</strong> {t("footer.emailid.message")}<br />
                </p>
                <div className="social-links d-flex mt-3">
                  <a href="#" className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
            <h4>{t("footer.title.message")}<span>.</span></h4>
              <ul>
              <li><a href="#" >{t("footer.menus.menu1.message")}</a></li>
              <li><a href="#" >{t("footer.menus.menu2.message")}</a></li>
              <li><a href="#" >{t("footer.menus.menu3.message")}</a></li>
              <li><a href="#" >{t("footer.menus.menu4.message")}</a></li>
              <li><a href="#" >{t("footer.menus.menu5.message")}</a></li>
              <li><a href="#" >{t("footer.menus.menu6.message")}</a></li>
              <li><a href="#" >{t("footer.menus.menu7.message")}</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
            <h4>{t("footer.title1.message")}<span>.</span></h4>
              <ul>
              <li><a href="#" >{t("footer.menus1.menu1.message")}</a></li>
              <li><a href="#" >{t("footer.menus1.menu2.message")}</a></li>
              <li><a href="#" >{t("footer.menus1.menu3.message")}</a></li>
              </ul>
            </div>

            {/* <div className="col-lg-2 col-md-3 footer-links">
              <h4>Departments</h4>
              <ul>
                <li><a href="#">Civil Engineering</a></li>
                <li><a href="#">Construction</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Finance</a></li>
                <li><a href="#">Architect</a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div className="footer-legal text-center position-relative">
        <div className="container">
          <div className="copyright">

            &copy; {t("footer.copyright.message")} <strong><span>{t("footer.copyright1.message")}</span></strong>{t("footer.copyright2.message")}
          </div>
          <div className="credits">
          {t("footer.copyright3.message")} <a href="https://bootstrapmade.com/"> {t("footer.copyright4.message")}</a>
          </div>
        </div>
      </div>
      <style>{`
        /* Add the styles to remove underlines for links */
        .footer a {
          text-decoration: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
