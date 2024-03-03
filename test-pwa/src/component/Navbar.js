import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Park Cloud</Link>
      </div>

      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink exact="true" to="/" activeclassname="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" activeclassname="active-link">
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" activeclassname="active-link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeclassname="active-link">
              Login
            </NavLink>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
