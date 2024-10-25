import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="GodotHub" />
      </div>
      <ul className="navbar-links">
        <li>Store</li>
        <li>Game Jams</li>
        <li>Upload Game</li>
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
