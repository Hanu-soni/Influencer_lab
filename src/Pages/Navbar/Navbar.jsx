import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";

// this component returns our navbar ultimately //

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        
          <img src={logo} alt="" width="120px" />
      </div>

      <div className="nav-links">
        <ul>
         
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activenav" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Student"
              className={({ isActive }) => (isActive ? "activenav" : "")}
            >
            Student
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Teacher"
              className={({ isActive }) => (isActive ? "activenav" : "")}
            >
              Teacher
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

 