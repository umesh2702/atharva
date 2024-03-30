import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Landingpage from './LandingPage';
import AboutUs from './About';
import Events from './Events';
import Login from './Login';
import Signup from './Signup';
import Upswing from './Upswing';
import ContactUs from './Contact';

const ShowDash = ({ isLoggedIn, showDashboard,handleLogin }) => {
  if (showDashboard && isLoggedIn) {
    return (
        
        <div className='col-12 col-lg-2 bg-white '>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      

      </div>

    );
  } else {
    return null;
  }
}

export default ShowDash;
