import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Content = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ display: 'flex',  width: 'auto' , marginTop:'10vh', paddingLeft:'10px', paddingRight:'10px'}}>
      <div >
        <div style={{  }}>
          <p style={{ fontSize: '1.2rem', color: '#333', lineHeight: '1.6' }}>
          The Atharva Data Science Community (ADSC) was established by Data Science students on June 15, 2022, at Malla Reddy Engineering College with the aim of bridging the gap between the college curriculum and industry requirements in the field of data science. Named after the Atharvana Veda, symbolizing comprehensive knowledge, ADSC endeavors to serve as a platform for discussion, learning, and teaching in data science.

Under the guidance of Dr. S. ShivaPrasad, the Head of Department, and the support of Dr. A. Ramaswamy Reddy, the Director, ADSC has emerged as a dynamic and committed community dedicated to fostering practical skills and knowledge in data science among students.
          </p>
          {!expanded && (
            <Button variant="primary" onClick={toggleExpand} style={{ marginTop: '20px', background:'#F25A3C ', border:'none  ' }}>
              Read more
            </Button>
          )}
          {expanded && (
            <div>
              <p style={{ fontSize: '1.2rem', color: '#333', lineHeight: '1.6' }}>
              Through a variety of initiatives such as workshops, hackathons, and the annual tech fest, Praesto, ADSC provides students with opportunities to showcase their talents, innovation, and empowerment. Notably, the community's core team and interns have demonstrated success not only in technical endeavors but also in cultural and sports events, underscoring their diverse skills and achievements.

By creating a collaborative and supportive environment, ADSC contributes to nurturing a culture of learning and growth among students interested in data science, thereby preparing them for the demands of the industry and beyond.
              </p>
              <Button variant="secondary" onClick={toggleExpand} style={{ marginTop: '20px',background:'#FF7F40 ', border:'none  '  }}>
                Read less
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
