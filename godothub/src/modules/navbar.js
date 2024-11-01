import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/developer">
          <img src="godothub_logo.png" alt="GodotHub" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" activeClassName="active">
            Store
          </NavLink>
        </li>
        <li>Game Jams</li>
        <li>
          <NavLink to="/upload" activeClassName="active">
            Upload Game
          </NavLink>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-icons">
        <button className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="signin-btn">Sign in</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
};

export default NavBar;
