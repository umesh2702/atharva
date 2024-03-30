import React from 'react';
import '../CSS/PageBackground.css'; // Import the CSS file
import Excess from './Excess'


import Carousel1 from './Carousel1';
import Card2 from './Cards2';
import Core from './Core';

const AboutUs = () => {
  return (
    <div className="container-fluid about-us-page  text-dark p-0 mt-0 page-background" style={{overflow:'hidden'}}>
      <div className="carousel-container">
        
        <Carousel1/>
      </div>
      <br />
      <h1 className="display-1 mb-4 text-center animate__animated animate__fadeInDown" style={{fontSize:'40px', fontWeight:'500', color:'#F25A3C'}}>
        About ADSC
      </h1>
      <p className="lead  animate__animated animate__fadeInDown" style={{marginRight:'30px', marginLeft:'30px', fontWeight:'300'}}>
      Atharva Data Science Community emerged as a group of passionate students from the department of CSE-Data Science at Malla Reddy Engineering College
       who are determined to make a positive impact in the world of technology. Our enthusiasm for learning and our unwavering dedication to sharing our 
       knowledge is truly inspiring. By creating a platform for individuals to explore and deepen their understanding of Data Science, we are empowering 
       the next generation of innovators and creators. Atharva Data Science Community is a testament to what can be accomplished when we, the driven individuals
        come together sharing a purpose. We are not just shaping our own future, but also of the future endeavors of the tech industry as a whole.  
      </p>
      <br />
      
    <Excess/>
        
      <Core/>

    <Card2 />
  

    </div>
  );
};

export default AboutUs;
