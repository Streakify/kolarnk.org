import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactSection = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get('https://kolarnk.up.railway.app/contact');
        setContactInfo(response.data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <section id="contact" className="contact mb-4" data-aos="fade-up" data-aos-delay="100" >
      <div className="container">
        <div className="row gy-4">
          {contactInfo && (
            <>
              <div className="col-lg-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-map"></i>
                  <h3>Our Address</h3>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>{contactInfo?.mobileNumber}</p>
                </div>
              </div>
            </>
          )}
        </div>
        {/* <div className="row gy-4 mt-1">
          <div className="col-lg-6">
            <iframe
              title="Google Maps"
              src={contactInfo && contactInfo.mapSrc}
              frameBorder="0"
              style={{ border: 0, width: '100%', height: '384px' }}
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row gy-4">
                <div className="col-lg-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-lg-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
