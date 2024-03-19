import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../images/1.png';

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
      <div className="main" style={{ padding: "20px", textAlign: "center" }}>
        <div className="multi-row-wrapper">
          <div className="row" style={{ marginBottom: "20px",  padding: "20px", }}>
            <div className="info" style={{ flex: "1", textAlign: "left", background: "#f0f0f0", padding: "20px", borderRadius: "10px" }}>
              <div className="title" style={{ fontSize: "24px", marginBottom: "10px" }}>About Us</div>
              <div className="discr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nisi reprehenderit, recusandae quisquam beatae necessitatibus
                inventore vel illo impedit tempore aspernatur exercitationem
                ducimus nobis distinctio dolore quis enim quasi alias.
              </div>
            </div>
            <img
              src={image}
              alt="img"
              style={{ flex: "1", maxWidth: "100%", maxHeight: "100%", borderRadius: "10px" }}
            />
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <img
              src={image}
              alt="img"
              style={{ flex: "1", maxWidth: "100%", maxHeight: "100%" }}
            />
            <div className="info" style={{ flex: "1", textAlign: "left", background: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <div className="title" style={{ fontSize: "24px", marginBottom: "10px" }}>Our Mission And vision</div>
              <div className="discr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nisi reprehenderit, recusandae quisquam beatae necessitatibus
                inventore vel illo impedit tempore aspernatur exercitationem
                ducimus nobis distinctio dolore quis enim quasi alias.
              </div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="info" style={{ flex: "1", textAlign: "left",background: "#f9f9f9", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "10px" }}>
              <div className="title" style={{ fontSize: "24px", marginBottom: "10px" }}>Our Story</div>
              <div className="discr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nisi reprehenderit, recusandae quisquam beatae necessitatibus
                inventore vel illo impedit tempore aspernatur exercitationem
                ducimus nobis distinctio dolore quis enim quasi alias.
              </div>
            </div>
            <img
              src={image}
              alt="img"
              style={{ flex: "1", maxWidth: "100%", maxHeight: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
        {/* Additional styling for cards */}
        <div
          className="cards-wrapper"
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
            background: "#f9f9f9",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }}
        >
          <div className="cards-wrapper-title" style={{ fontSize: "24px", marginBottom: "20px" }}>ADSC By Numbers</div>
          <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="card" style={{ flex: "1", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
              {/* Your first part content */}
            </div>
            <div className="card" style={{ flex: "1", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px", marginLeft: "20px", marginRight: "20px" }}>
              {/* Your second part content */}
            </div>
            <div className="card" style={{ flex: "1", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
              {/* Your third part content */}
            </div>
          </div>
        </div>
        {/* Additional styling for review block */}
        <div
          className="review-block"
          style={{ textAlign: "center", marginBottom: "50px", background: "#f0f0f0", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="review-block-title" style={{ fontSize: "24px", marginBottom: "20px" }}>What Our Community Members Say</div>
          <div className="review-carousel">
            <Slider {...settings}>
              <div className="review">hi</div>
              <div className="review">hello</div>
              <div className="review">nama</div>
              <div className="review">js</div>
              {/* Your review content */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
