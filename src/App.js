import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Header1 from './after/Header1';

import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Upswing from './components/Upswing';
import Events from './components/Events';
import Contact from './components/Contact';
import About from './components/About'

const App = () => {
  return (
    < div >  <BrowserRouter>
     <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<Upswing/>} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
