import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-4`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <h1>{props.title}</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active mx-3 my-3"
                aria-current="page"
                href=""
              >
                <h4>Home</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-3 my-3" href="">
                <h4>About</h4>
              </a>
            </li>
          </ul>
 
          <button onClick={props.green} type="button" class="btn btn-success mx-2">
            Green
          </button>
          <button onClick={props.red} type="button" class="btn btn-danger mx-2">
            Red
          </button>
          <button onClick={props.yellow} type="button" class="btn btn-warning mx-2" >
            Yellow
          </button>
    
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <strong>{props.textmode}</strong>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototypes = {
  tittle: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  tittle: "Tittle",
};
