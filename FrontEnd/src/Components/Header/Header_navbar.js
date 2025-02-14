import React from "react";
import "./Header_navbar.css";
import { Link } from "react-router-dom";

function Header_navbar() {
  return (
    <div className="main_navbar mt-2">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="link_btn">

                <li className="nav-item menu_one">
                  <a className="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                </Link>
                <li className="nav-item menu_one">
                  <a className="nav-link" href="#">
                    OUR SOLUTIONS
                  </a>
                </li>
                <Link to="/about-us" className="link_btn">
                <li className="nav-item menu_one">
                  <a className="nav-link" href="#">
                    ABOUT US
                  </a>
                </li>
                </Link>
                <li className="nav-item menu_one">
                  <a className="nav-link" href="#">
                    STUDIES
                  </a>
                </li>
                <Link to='/blogs'>
                <li className="nav-item menu_one">
                  <a className="nav-link" href="#">
                    BLOGS
                  </a>
                </li>
                </Link>
                <li className="nav-item menu_one">
                  <a className="nav-link" href="#">
                    PAGE
                  </a>
                </li>
                <Link to="/contact-us" className="link_btn">
                  <li className="nav-item menu_one">
                    <a className="nav-link" href="#">
                      CONTACT US
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header_navbar;
