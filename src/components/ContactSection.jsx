import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-map"></i>
              <h3>Our Address</h3>
              <p>Kolar Karnataka</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+0000000000</p>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-1">
          <div className="col-lg-6">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.776663428385!2d78.1683029!3d13.1185509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badf1858c924913%3A0xc87186df8c264397!2sNirmithi%20Kendra!5e0!3m2!1sen!2sin!4v1703939093904!5m2!1sen!2sin"
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
