import React from 'react';
import Carousel1 from './Carousel1';
import Core from './Core';
import Card2 from './Cards2';
import logo from '../images/atharva logo.png';

function About() {
  return (
    <div className="container about-us-page text-dark p-0 mt-0 page-background" style={{overflow: 'hidden'}}>
      <div className="carousel-container">
        <Carousel1 />
      </div>
      <br />
      <h1 className="display-1 mb-4 text-center animate__animated animate__fadeInDown" style={{fontSize: '40px', fontWeight: '500', color: '#F25A3C'}}>
        About ADSC
      </h1>
      <p className="lead animate__animated animate__fadeInDown" style={{marginRight: '30px', marginLeft: '30px', fontWeight: '300', color: 'white'}}>
        Atharva Data Science Community emerged as a group of passionate students from the department of CSE-Data Science at Malla Reddy Engineering College who are determined to make a positive impact in the world of technology. Our enthusiasm for learning and our unwavering dedication to sharing our knowledge is truly inspiring. By creating a platform for individuals to explore and deepen their understanding of Data Science, we are empowering the next generation of innovators and creators. Atharva Data Science Community is a testament to what can be accomplished when we, the driven individuals come together sharing a purpose. We are not just shaping our own future, but also of the future endeavors of the tech industry as a whole.
      </p>
      <br />
      <div className="row">
        <div className="col-md-6">
          <img src={logo} className="img-fluid" alt="Atharva Logo" />
        </div>
        <div className="col-md-6">
          <div className="">
            <h2 style={{color: '#F25A3C'}}>Vision and Mission</h2>
            <p className="lead" style={{color: 'white'}}>
              "At Atharva Data Science Community, our vision is to empower individuals with the knowledge and skills needed to thrive in the ever-evolving field of technology. We strive to be a leading platform for learning and sharing insights, fostering innovation, and driving positive change in the digital world. Our community aims to inspire and equip individuals to tackle real-world challenges and make meaningful contributions to society through technology."
              <br />
              <br />
              "Our mission is to curate and deliver high-quality content, resources, and programs that enable individuals to excel in various domains of technology. We are committed to fostering a collaborative and inclusive environment where members can share their expertise, learn from each other, and stay updated with the latest trends and advancements in the industry. Through workshops, seminars, and hands-on projects, we aim to enhance the skills and capabilities of our community members, empowering them to succeed in their educational and professional endeavors. At Atharva Data Science Community, we are dedicated to nurturing a culture of continuous learning, growth, and innovation."
            </p>
          </div>
        </div>
      </div>
      <br />
      <Core />
      <Card2 />
    </div>
  );
}

export default About;
