import React, { useState } from 'react';
import image1 from '../images/core/1.png';
import image2 from '../images/core/2.png';
import image3 from '../images/core/3.png';
import image4 from '../images/core/4.png';
import image5 from '../images/core/5.png';
import image6 from '../images/core/6.png';
import image7 from '../images/core/7.png';
import image8 from '../images/core/8.png';
import image9 from '../images/core/9.png';
import image10 from '../images/core/10.png';

function Core() {
  const [hoveredMember, setHoveredMember] = useState(null);

  // Sample data for founding core batch members
  const foundingMembers = [
    { id: 1, name: 'Akshay M', post: 'President', image: image1 },
    { id: 2, name: 'Revanth M', post: 'Vice President', image: image2 },
    { id: 3, name: 'K.Dharani', post: 'General Secretary', image: image3 },
    { id: 4, name: 'CH.Sree Harshitha', post: 'Public Relations Manager', image: image5 },
    { id: 5, name: 'K.Alekhya', post: 'Treasurer', image: image6 },
    { id: 6, name: 'J.Abhay', post: 'Technical Lead', image: image4 },
    { id: 7, name: 'A.Bhavana', post: 'Executive Member', image: image10 },
    { id: 8, name: 'G.Harsha Vardhini', post: 'Executive Member', image: image9 },
    { id: 9, name: 'M.Sai Teja', post: 'Executive Member', image: image8 },
    { id: 10, name: ' K.Krishna Vamshi', post: 'Executive Member', image: image7 },
    // Add more members here
  ];

  const handleHover = (id) => {
    setHoveredMember(id);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Founding Core Batch</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {foundingMembers.map(member => (
          <div 
            key={member.id} 
            style={{ 
              width: '120px', 
              height: '120px', 
              position: 'relative', 
              margin: '20px', 
              overflow: 'hidden', 
              cursor: 'pointer', 
            }}
            onMouseEnter={() => handleHover(member.id)}
            onMouseLeave={() => handleHover(null)}
          >
            <img 
              src={member.image} 
              alt={member.name} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                transform: hoveredMember === member.id ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s'
              }} 
            />
            {hoveredMember === member.id && (
              <div 
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '130px', // Adjust this value as needed
                  width: '400px',
                  height: '240px',
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  padding: '20px',
                  zIndex: '999',
                }}
              >
                <h3>{member.name}</h3>
                <p>{member.post}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Core;
