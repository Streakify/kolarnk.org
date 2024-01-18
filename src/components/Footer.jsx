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
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>{t("header.title.message")}</h3>
                <p>
                  Kolar, Karnataka
                  <br />
                  <br />
                  <br />
                  <strong>Phone:</strong> +000000000<br />
                  <strong>Email:</strong> info@kolarnk.org<br />
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
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Training</a></li>
                <li><a href="#">Construction</a></li>
                <li><a href="#">Development</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Departments</h4>
              <ul>
                <li><a href="#">Civil Engineering</a></li>
                <li><a href="#">Construction</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Finance</a></li>
                <li><a href="#">Architect</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal text-center position-relative">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Kolar Nirmithi Kendra</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">Kolar Nirmithi Kendra</a>
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
