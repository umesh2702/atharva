import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Dashboard({ showDashboard }) {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Fetch user information after component mounts
    const fetchUserInfo = async () => {
      try {
        const roll = localStorage.getItem('roll');
        const response = await axios.get(`http://localhost:8000/user/${roll}`);
        setUserName(response.data.name);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className='bg-white sidebar p-2' style={{ maxWidth: '600px',   left: 0,  }}>
      <div className='m-2'>
        <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
        
        <span className='brand-name fs-4'>Hi {userName}</span>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <a className='list-group-item py-2 '>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-5'>Dashboard</span>
        </a>
        <a className='list-group-item py-2 '>
          <i className='bi bi-house fs-5 me-3'></i>
          <span className='fs-5'>Participation</span>
        </a>
        <a className='list-group-item py-2 '>
          <i className='bi bi-table fs-5 me-3'></i>
          <span className='fs-5'>Progress</span>
        </a>
        <a className='list-group-item py-2 '>
          <i className='bi bi-clipboard-data fs-5 me-3'></i>
          <span className='fs-5'>Projects</span>
        </a>
        <a className='list-group-item py-2 '>
          <i className='bi bi-people fs-5 me-3'></i>
          <span className='fs-5'>Achievements</span>
        </a>
        
      </div>
    </div>
  );
}

export default Dashboard;
