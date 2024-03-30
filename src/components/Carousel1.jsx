import React from 'react'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import image from '../images/carousel/carousel5.JPG'
import image1 from '../images/carousel/carousel6.png'
import image2 from '../images/carousel/carousel7.JPG'
import image3 from '../images/carousel/carousel8.JPG'
import Slider from 'react-slick';

function Carousel1() {
    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000, // Set the time interval for slides in milliseconds
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
        <div>
            {/* Carousel */}
        <section className="mt-5">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-inner" style={{maxHeight:'60vh', maxWidth:'80vw',  marginLeft:'10%'}}>
            <Slider {...settings}>
          <div>
            <img src={image} alt="Slide 1" style={{ maxHeight: '60vh', maxWidth: '80vw', margin: 'auto' }}/>
          </div>
          <div>
            <img src={image1} alt="Slide 2" style={{ maxHeight: '60vh', maxWidth: '80vw', margin: 'auto' }}/>
          </div>
          <div>
            <img src={image2} alt="Slide 2" style={{ maxHeight: '60vh', maxWidth: '80vw', margin: 'auto' }}/>
          </div>
          <div>
            <img src={image3} alt="Slide 2" style={{ maxHeight: '60vh', maxWidth: '80vw', margin: 'auto' }}/>
          </div>
          {/* Add more slides here as needed */}
        </Slider>
                
              
            </div>
          </div>
        </section>
        </div>
    )
}

export default Carousel1