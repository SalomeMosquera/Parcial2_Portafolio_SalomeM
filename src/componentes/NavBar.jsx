import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="logo" src="./assets/Logo.png" alt="" />
          <ul>
            <li>
              <NavLink
                className="navbar-item"
                to="/"
                // exact
                activeClassName="active"
              >
                Sobre Mi
              </NavLink>
            </li>

            <li>
              <NavLink
                className="navbar-item"
                to="/proyectos"
                activeClassName="active"
              >
                Proyectos
              </NavLink>
            </li>

            <li>
              <NavLink
                className="navbar-item"
                to="/git-ignore"
                activeClassName="active"
              >
                Git Ignore
              </NavLink>
            </li>
          </ul>
          {/* <input type="checkbox" class="toggler"></input> */}
          <button className="menu-btn" onClick={() => {}}>
            <span
              class={"material-symbols-outlined"}
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
