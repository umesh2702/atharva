import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  // Configuration for the slider
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000, // Set the time interval for slides in milliseconds
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="multi-row-wrapper">
          <div className="row">
            <div className="info">
              <div className="title">About Us</div>
              <div className="discr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nisi reprehenderit, recusandae quisquam beatae necessitatibus
                inventore vel illo impedit tempore aspernatur exercitationem
                ducimus nobis distinctio dolore quis enim quasi alias.
              </div>
            </div>
            <img src="./images/event1.png" alt="img" />
          </div>
          <div className="row">
            <img src="./images/event1.png" alt="img" />
            <div className="info">
              <div className="title">Our Mission And vision</div>
              <div className="discr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nisi reprehenderit, recusandae quisquam beatae necessitatibus
                inventore vel illo impedit tempore aspernatur exercitationem
                ducimus nobis distinctio dolore quis enim quasi alias.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="info">
              <div className="title">Our Story</div>
              <div className="discr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nisi reprehenderit, recusandae quisquam beatae necessitatibus
                inventore vel illo impedit tempore aspernatur exercitationem
                ducimus nobis distinctio dolore quis enim quasi alias.
              </div>
            </div>
            <img src="./images/event1.png" alt="img" />
          </div>
        </div>
        <div className="cards-wrapper">
          <div className="cards-wrapper-title">ADSC By Numbers</div>
          <div className="card">
            <div className="card-icon"></div>
            <div className="card-discr">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              beatae molestias consequatur
            </div>
          </div>
          <div className="card">
            <div className="card-icon"></div>
            <div className="card-discr">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              beatae molestias consequatur
            </div>
          </div>
          <div className="card">
            <div className="card-icon"></div>
            <div className="card-discr">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              beatae molestias consequatur
            </div>
          </div>
        </div>
        <div className="review-block">
          <div className="review-block-title">
            What Our Community Members Say
          </div>
          <div className="review-carousel">
            <Slider {...settings}>
              <div className="review">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                sunt, magnam officiis odio exercitationem, est ipsa corporis
                ratione consequuntur velit doloremque eius non dolor ut
                architecto! Est quidem ex reiciendis.
              </div>
              <div className="review">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                sunt, magnam officiis odio exercitationem, est ipsa corporis
                ratione consequuntur velit doloremque eius non dolor ut
                architecto! Est quidem ex reiciendis.
              </div>
              <div className="review">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                sunt, magnam officiis odio exercitationem, est ipsa corporis
                ratione consequuntur velit doloremque eius non dolor ut
                architecto! Est quidem ex reiciendis.
              </div>
              <div className="review">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                sunt, magnam officiis odio exercitationem, est ipsa corporis
                ratione consequuntur velit doloremque eius non dolor ut
                architecto! Est quidem ex reiciendis.
              </div>

              {/* Add more slides here as needed */}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
