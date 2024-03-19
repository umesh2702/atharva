import React from 'react';

const ContactUs = () => {
  return (
    <div className="container-fluid contact-us-page  text-light py-5 page-background">
      <div className="row">
        <div className="col-md-6">
          <div style={{ marginBottom: '1rem', textAlign:'center' }}>
            <h4 >Head over to MREC</h4 >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.0446194531996!2d78.45257929033018!3d17.558261457683965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f9f1fb120d1%3A0x2d4f935c2378dbe6!2sMalla%20Reddy%20Engineering%20College!5e0!3m2!1sen!2sin!4v1710494847824!5m2!1sen!2sin"
              width="80%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{marginLeft:'10%',}}
            />
          </div>
        </div>
        <div className="col-md-6" style={{color:'black'}}>
          <h1 className="display-1 mb-4 text-center animate__animated animate__fadeInDown">
            Contact Us
          </h1>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name (required)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="nameHelp"
                    required
                  />
                  <div id="nameHelp" className="form-text">
                    We'll never share your name with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address (required)
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary animate__animated animate__pulse animate__infinite">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
