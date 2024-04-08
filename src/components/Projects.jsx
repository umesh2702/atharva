import React from 'react';
import FileUpload from './FileUpload'

function Projects() {
  return (
    <div style={{ backgroundColor:'#020012', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', background: 'linear-gradient(135deg , #090042, #ffffff 100%)'  }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3rem' }}>Your Amazing Projects</h1>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2>No projects to display yet!</h2>
        <p>Be the first to showcase your incredible work.</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <FileUpload/>
      </div>
    </div>
  );
}

export default Projects;
