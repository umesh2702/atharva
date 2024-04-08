import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Events from './components/Events';
import Contact from './components/Contact';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar2 from './components/Navbar2'; // Import Navbar2 component here
import Projects from './components/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false); // State for showing dashboard

  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true after successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false after successful logout
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard); // Toggle showDashboard state
  };

  return (
    <div className='containers bg-dark min-vh-100' style={{backgroundColor:''}}>
      <BrowserRouter>
        {isLoggedIn ? <Navbar2 handleLogout={handleLogout} toggleDashboard={toggleDashboard} /> : <Header />} {/* Conditionally render Header or Navbar2 */}
        
        <div className="d-sm-flex flex-sm-row flex-sm-wrap" style={{paddingTop:'70px'}}>
          <div className={`col-sm-${showDashboard ? '2' : '0'}  ${showDashboard && isLoggedIn ? 'order-sm-1' : ''}`}>
            {showDashboard && isLoggedIn && <Dashboard />}
          </div>
          <div className={`col-sm-${showDashboard ? '10' : '12'} ${showDashboard && isLoggedIn ? 'order-sm-2' : ''}`}>
            <Routes>
              
                <Route path='/' element={<LandingPage Login={isLoggedIn}/>} />
                <Route path='/about' element={<About />} />
                <Route path='/events' element={<Events />} />
                <Route path='/contact' element={<Contact />} /> 
                <Route path='/login' element={<Login onLogin={handleLogin} />} /> {/* Pass onLogin prop to Login component */}
                <Route path='/signup' element={<Signup />} />
                <Route path='/projects' element={<Projects/>} />
              
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
