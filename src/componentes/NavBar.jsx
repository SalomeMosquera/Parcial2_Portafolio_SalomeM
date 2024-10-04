import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="logo" src="./assets/Logo.png" alt="" />
          <ul className={`menu-items ${isMenuOpen ? "open" : ""}`}>
            <li>
              <NavLink
                className="navbar-item"
                to="/"
                exact
                activeClassName="active"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Mi
              </NavLink>
            </li>

            <li>
              <NavLink
                className="navbar-item"
                to="/proyectos"
                activeClassName="active"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </NavLink>
            </li>

            <li>
              <NavLink
                className="navbar-item"
                to="/git-ignore"
                activeClassName="active"
                onClick={() => setIsMenuOpen(false)}
              >
                Git Ignore
              </NavLink>
            </li>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              menu
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
