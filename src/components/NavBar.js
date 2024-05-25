import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  const [query, setQuery] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-light w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="/Home">
          {/*<img
              src=""
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
  />*/}
          Brand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/Home"
                className="nav-link ml-3 my-2"
                style={({ isActive }) => ({
                  color: `var(${isActive ? "--hover" : "--light"})`,
                })}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/About"
                className="nav-link ml-3 my-2"
                style={({ isActive }) => ({
                  color: `var(${isActive ? "--hover" : "--light"})`,
                })}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link ml-3 my-2"
                style={({ isActive }) => ({
                  color: `var(${isActive ? "--hover" : "--light"})`,
                })}
              >
                Contacts
              </NavLink>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
