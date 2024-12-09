import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              <span>About</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin">
              <span>admin</span>
            </NavLink>
          </li>

          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
