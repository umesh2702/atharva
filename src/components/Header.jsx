import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

function Header() {
  return (
    <div className="head">
      <div className="logo"></div>
      
        <ul className="navbar">
          <li>
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
        <div  className="button">
        <button onClick={<Login />}>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
