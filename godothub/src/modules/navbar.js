import React, { useState, useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../components/auth/authContext';
import "../styles/navbar.css";
import Auth from '../components/auth/auth';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showAuth, setShowAuth] = useState(false);
  const [isRegistering, setIsRegistering] = useState(true);

  const userName = user?.displayName || "User";

  const handleAuthToggle = (registering) => {
    setIsRegistering(registering);
    setShowAuth(true);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="godothub_logo.png" alt="GodotHub" />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" activeClassName="active">Store</NavLink>
        </li>
        <li>
          <NavLink to="/upload" activeClassName="active">Upload Game</NavLink>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-icons">
        {user ? (
          <div className="user-info">
            <img
              src={user.photoURL || "avatar_placeholder.png"}
              alt="User Avatar"
              className="user-avatar"
            />
            <span>{userName}</span>
            <button onClick={logout} className="logout-button">Logout</button>
          </div>
        ) : (
          <>
            <button className="signin-btn" onClick={() => handleAuthToggle(false)}>
              Sign in
            </button>
            <button className="register-btn" onClick={() => handleAuthToggle(true)}>
              Register
            </button>
          </>
        )}
      </div>

      {showAuth && (
        <div className="auth-modal">
          <Auth isRegistering={isRegistering} onClose={() => setShowAuth(false)} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
