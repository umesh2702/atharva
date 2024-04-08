import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GiAchievement } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import nas from "../images/nasio.png"
import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Dashboard({ showDashboard }) {
  const [userName, setUserName] = useState('');
  const [roll, setRoll] = useState('');
  const [clickedItemIndex, setClickedItemIndex] = useState(null);

  useEffect(() => {
    // Fetch user information after component mounts
    const fetchUserInfo = async () => {
      try {
        const roll = localStorage.getItem('roll');
        const response = await axios.get(`http://localhost:8000/user/${roll}`);
        setUserName(response.data.name);
        setRoll(roll)
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleClick = (index) => {
    // Update the state to the index of the clicked item
    setClickedItemIndex(index);
  };

  return (
    <div className="sidebar" style={{ width: '240px', color: 'white', paddingTop: '20px', position: 'fixed', left: 0, overflowY: 'auto', borderRadius: '20px', }}>
      
      <style>{`
        .menu-item:hover {
          background-color: #FFA500;
        }
      `}</style>

      
      <div className="profile" style={{ padding: '10px',  }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', }}>
          <BsPersonCircle fontSize={40} style={{marginRight:'10px'}}/>
          <div >
            <h5 style={{ margin: '0', fontSize: '20px', textAlign:'center' }}>Hi {userName}</h5>
            <p style={{ margin: '0', color: '#666', textAlign:'center' }}>{roll}</p>
          </div>
        </div>
      </div>
      <div className="menu">
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li onClick={() => handleClick(0)} style={{ display: 'flex', alignItems: 'center', padding: '10px', height: '40px', width: '80%', marginLeft:'10%', transition: 'background-color 0.3s', cursor: 'pointer', borderRadius: '20px', margin: '10px 0', backgroundColor: clickedItemIndex === 0 ? '#FF8000' : '', ":hover": { backgroundColor: '#FFA500' } }} className="menu-item">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="bi bi-speedometer2" style={{ marginRight: '10px', fontSize: '20px', color: '#FF0000' }}></i>
              <img src={nas} alt="" style={{maxHeight:'33px', maxWidth:'33px'}}/>
             <a href="https://nas.io/atharvadsc" target='_blank' rel='noreferrer' style={{textDecoration:'none', color:'white'}}> <span style={{ fontSize: '20px', }}>NAS.io</span></a>
            </div>
          </li>
          <li onClick={() => handleClick(1)} style={{ display: 'flex', alignItems: 'center', padding: '10px', height: '40px', width: '80%', marginLeft:'10%', transition: 'background-color 0.3s', cursor: 'pointer', borderRadius: '20px', margin: '10px 0', backgroundColor: clickedItemIndex === 1 ? '#FF8000' : '', ":hover": { backgroundColor: '#FFA500' } }} className="menu-item">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="bi bi-house" style={{ marginRight: '10px', fontSize: '20px', color: '#FF0000' }}></i>
              <GrProjects fontSize={25} style={{ marginRight: '10px' }} />
              <Link to='/projects' style={{textDecoration:'none'}}><span style={{ fontSize: '20px', color:'white' }}>Projects</span></Link>
            </div>
          </li>
          <li onClick={() => handleClick(2)} style={{ display: 'flex', alignItems: 'center', padding: '10px', height: '40px', width: '80%', marginLeft:'10%', transition: 'background-color 0.3s', cursor: 'pointer', borderRadius: '20px', margin: '10px 0', backgroundColor: clickedItemIndex === 2 ? '#FF8000' : '', ":hover": { backgroundColor: '#FFA500' } }} className="menu-item">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="bi bi-table" style={{ marginRight: '10px', fontSize: '20px', color: '#FF0000' }}></i>
              <GiAchievement fontSize={25} style={{ marginRight: '10px' }} />
              <span style={{ fontSize: '20px' }}>  Achievements</span>
            </div>
          </li>
          <li onClick={() => handleClick(3)} style={{ display: 'flex', alignItems: 'center', padding: '10px', height: '40px', width: '80%', marginLeft:'10%', transition: 'background-color 0.3s', cursor: 'pointer', borderRadius: '20px', margin: '10px 0', backgroundColor: clickedItemIndex === 3 ? '#FF8000' : '', ":hover": { backgroundColor: '#FFA500' } }} className="menu-item">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="bi bi-clipboard-data" style={{ marginRight: '10px', fontSize: '20px', color: '#FF0000' }}></i>
              <FaGithub fontSize={25} style={{ marginRight: '10px' }} />
              <a href="https://github.com/ATHARVADSCOMMUNITY" target='_blank' rel='noreferrer' style={{textDecoration:'none', color:'white'}}><span style={{ fontSize: '20px' }}>Github</span></a>
            </div>
          </li>
          <li onClick={() => handleClick(4)} style={{ display: 'flex', alignItems: 'center', padding: '10px', height: '40px', width: '80%', marginLeft:'10%', transition: 'background-color 0.3s', cursor: 'pointer', borderRadius: '20px', margin: '10px 0', backgroundColor: clickedItemIndex === 4 ? '#FF8000' : '', ":hover": { backgroundColor: '#FFA500' } }} className="menu-item">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i className="bi bi-people" style={{ marginRight: '10px', fontSize: '20px', color: '#FF0000' }}></i>
              <IoShareSocialSharp fontSize={25} style={{ marginRight: '10px' }} />
              <span style={{ fontSize: '20px' }}>Socials</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
