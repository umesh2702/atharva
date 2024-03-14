import './App.css';
 import React from 'react'; // Import React
 import About from './components/About';
 import Contact from './components/Contact';
 import Events from './components/Events';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import  Footer  from './components/Footer';

const App = () => {
  return (
    <>
    
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/events' element={<Events/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='login' element={<Login/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
