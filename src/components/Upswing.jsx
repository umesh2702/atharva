import React from 'react';
import '../CSS/Upswing.css'; // Import CSS file for styling
import upswingImage from '../images/atharva2.png'; // Import your UpSwing image
import webDevImage from '../images/atharva2.png'; // Import image for Web Development
import designImage from '../images/atharva2.png'; // Import image for Design
import aiImage from '../images/atharva2.png'; // Import image for AI
import dataScienceImage from '../images/atharva2.png'; // Import image for Data Science
import databaseImage from '../images/atharva2.png'; // Import image for Databases
import previousSessionImage from '../images/atharva2.png'; // Import image for Previous Sessions

const Upswing = () => {
  return (
    <div className="upswing">
    <div className="upswing-page">
      <div className="upswing-header">
        <h1>Welcome to UpSwing</h1>
        <p>Empowering students with practical knowledge in trending domains</p>
      </div>
      <div className="upswing-image">
        <img src={upswingImage} alt="UpSwing Program" />
      </div>
      <div className="upswing-intro">
        <h2>Introduction to UpSwing</h2>
        <p>
          UpSwing is a prestigious program designed to bridge the gap between theory and practice
          in domains such as web development, design, AI, data science, and databases. We aim to
          provide students with the necessary resources and guidance to excel in these areas.
        </p>
      </div>
      <div className="upswing-domains">
        <h2>Domains Covered</h2>
        <div className="domain-images">
          <a href="https://discord.com/channels/1171141270123577394/1171155706750177423" target="_blank"><img src={webDevImage} alt="Web Development" /></a>
          <img src={designImage} alt="Design" />
          <img src={aiImage} alt="AI" />
          <img src={dataScienceImage} alt="Data Science" />
          <img src={databaseImage} alt="Databases" />
        </div>
        <p>UpSwing covers the following domains:</p>
        
      </div>
      <div className="upswing-resources">
        <h2>Roadmaps and Resources</h2>
        <p>For each covered domain, participants will have access to:</p>
        <ul>
          <li>Roadmaps outlining the learning path</li>
          <li>Recommended resources such as online courses, tutorials, and books</li>
          <li>Mentorship and guidance</li>
        </ul>
      </div>
      <div className="upswing-sessions">
        <h2>Previous Sessions</h2>
        <div className="session-images">
          <img src={previousSessionImage} alt="Previous Session 1" />
          <img src={previousSessionImage} alt="Previous Session 2" />
          <img src={previousSessionImage} alt="Previous Session 3" />
          {/* Add more images for previous sessions */}
        </div>
        <p>Check out some snapshots from our previous sessions:</p>
        {/* Add details or links to previous sessions if needed */}
      </div>
      
      {/* Testimonials, Call to Action, Navigation Links, etc. */}
    </div>
    </div>
  );
};

export default Upswing;
