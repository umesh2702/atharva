import React from 'react';
import atharvalogo from '../images/atharva logo.png'
import '../CSS/PageBackground.css'; // Import the CSS file

import { Carousel } from 'react-bootstrap'; // Import Carousel for animations

const AboutUs = () => {
  return (
    <div className="container-fluid about-us-page  text-dark p-0 mt-0 page-background" >
      <h1 className="display-1 mb-4 text-center animate__animated animate__fadeInDown">
        About Us
      </h1>
      <p className="lead text-center animate__animated animate__fadeInDown">
        We are a passionate team dedicated to creating innovative solutions. Our mission
        is to empower users with cutting-edge technology and exceptional experiences.
      </p>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            className="img-fluid about-us-image animate__animated animate__fadeInLeft"
            src={atharvalogo}// Replace with your image
            alt="Community Image"
          />
        </div>
        <div className="col-md-6 about-us-text">
          <h2 className="display-4 mb-4 animate__animated animate__fadeInRight">
            Our Vision & Mission
          </h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
            bibendum laoreet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            dolor auctor. Donec sed odio dui. Pellentesque at ultrices risus. Vivamus
            magna metus, pulvinar at elementum eu, placerat at tellus.
          </p>
        </div>
      </div>

      <div className="row g-3 mb-5 overflow-auto justify-content-center">        
      <div className="col-md-4">
          <div
            className="card bg-secondary text-light animate__animated animate__fadeInUp"
            style={{ maxWidth: '300px' }} // Set max-width for cards
          >
            <img
              src={atharvalogo}
              alt="Card Image 1"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                body of the card content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card bg-secondary text-light animate__animated animate__fadeInRight"
            style={{ maxWidth: '300px' }} // Set max-width for cards
          >
            <img
              src={atharvalogo}
              alt="Card Image 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                body of the card content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card bg-secondary text-light animate__animated animate__fadeInDown"
            style={{ maxWidth: '300px' }} // Set max-width for cards
          >
            <img
              src={atharvalogo}
              alt="Card Image 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                body of the card content.
              </p>
            </div>
          </div>
        </div>
        {/* Add three more cards in similar fashion */}
        <div className="col-md-4">
          <div
            className="card bg-secondary text-light animate__animated animate__fadeInUp"
            style={{ maxWidth: '300px' }} // Set max-width for cards
          >
            {/* Add content for the new card */}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card bg-secondary text-light animate__animated animate__fadeInRight"
            style={{ maxWidth: '300px' }} // Set max-width for cards
          >
            {/* Add content for the new card */}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card bg-secondary text-light animate__animated animate__fadeInDown"
            style={{ maxWidth: '300px' }} // Set max-width for cards
          >
            {/* Add content for the new card */}
          </div>
        </div>
      </div>
       
      

      <div className="carousel-container">
        <h2 className="display-4 mb-4 text-center animate__animated animate__fadeInUp">
          Our Work
        </h2>
        <Carousel fade controls="false" indicators="false" style={{ height: '300px' }}>
          {/* ... Carousel.Item elements for slides ... */}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
