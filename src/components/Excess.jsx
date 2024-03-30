import React from 'react';
import logo from '../images/atharva logo.png'

const Excess = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={logo} className="img-fluid" alt="Responsive" />
        </div>
        <div className="col-md-6">
          <div className="content">
            <h2 style={{color:'#F25A3C'}}>Vision and Mission</h2>
            <p className="lead">
          "At Atharva Data Science Community, our vision is to empower individuals with the knowledge and skills needed to thrive in the 
          ever-evolving field of technology. We strive to be a leading platform for learning and sharing insights, fostering innovation, 
          and driving positive change in the digital world. Our community aims to inspire and equip individuals to tackle real-world challenges 
          and make meaningful contributions to society through technology."
            <br />
            <br />
          "Our mission is to curate and deliver high-quality content, resources, and programs that enable individuals to excel in various domains of 
          technology. We are committed to fostering a collaborative and inclusive environment where members can share their expertise, learn from 
          each other, and stay updated with the latest trends and advancements in the industry. Through workshops, seminars, and hands-on projects,
           we aim to enhance the skills and capabilities of our community members, empowering them to succeed in their educational and professional 
           endeavors. At Atharva Data Science Community, we are dedicated to nurturing a culture of continuous learning, growth, and innovation."
          </p>          </div>
        </div>
      </div>
    </div>
  );
}

export default Excess;

// Add Bootstrap CSS link in index.html or include Bootstrap CSS in your project
