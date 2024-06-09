import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isPokemonesActive =
    location.pathname.startsWith("/pokemones") ||
    location.pathname.startsWith("/pokemon");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="nav-icon">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </div>
      <div className="navbar-right">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pokemones"
          className={({ isActive }) =>
            isPokemonesActive ? "nav-link active" : "nav-link"
          }
        >
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
