// LoginForm.js
import React, { useState } from 'react';
import '../CSS/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [login, setLogin]= useState(false);
  const handleLoginClick = () => {
    setLogin(true);
  };
  return (
    <div className="home" onClick={handleLoginClick} >
      <h1  > Login</h1>
      
    </div>
    
  );
  
};

export default Login;
