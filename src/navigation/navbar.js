import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div id="home">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#home">
                <img
                  className="brand"
                  src={require("./resources/person.png")}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
              >
                <span className="custom-toggler-icon">
                  <FontAwesomeIcon className="ml-auto" icon={faBars} />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#abstract">
                      ABSTRACT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#history">
                      HISTORY
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">
                      SKILLS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      PORTFOLIO
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#blog">
                      BLOG
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
