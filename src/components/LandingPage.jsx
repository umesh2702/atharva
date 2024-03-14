import React from 'react';
import Header from './Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Atharva from '../images/atharva2.png';
import Atharva1 from '../images/atharva logo2.png';
import '../CSS/LandingPage.css'
import event2 from '../images/event2.png';


function LandingPage() {
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
      <div className="content">
      Atharva Data Science Community emerged as a group of passionate students from the department of CSE-Data Science at Malla Reddy Engineering College who are determined to make a positive impact in the world of technology. Our enthusiasm for learning and our unwavering dedication to sharing our knowledge is truly inspiring. By creating a platform for individuals to explore and deepen their understanding of Data Science, we are empowering the next generation of innovators and creators. Atharva Data Science Community is a testament to what can be accomplished when we, the driven individuals come together sharing a purpose. We are not just shaping our own future, but also of the future endeavors of the tech industry as a whole.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex voluptas numquam, perferendis reprehenderit natus cupiditate modi quas vitae aliquid. 

      </div>
      <div className="corousel">
        {/* Configure Slider with settings */}
        <Slider {...settings}>
          <div>
            <img src={Atharva} alt="Slide 1" />
          </div>
          <div>
            <img src={Atharva1} alt="Slide 2" />
          </div>
          {/* Add more slides here as needed */}
        </Slider>
      </div>
      <div className="events">
        <img src={event2} alt="" />
        <img src={event2} alt="" />
        <img src={event2} alt="" />
        <img src={event2} alt="" />
      </div>
    </>
  );
}

export default LandingPage;
