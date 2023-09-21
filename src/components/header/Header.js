import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/images/logo.png";

function Header() {
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          {" "}
          <img src={BrandLogo} alt="ilite soft technology" />
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="nav-link scrollto">
                About
              </Link>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            {/* <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}

            <li className="dropdown megamenu">
              <a href="#">
                <span>Mega Menu</span> <i className="bi bi-chevron-down"></i>
              </a>
              <div className="dropdown-menu">
                <div className="events-nav">
                  <div className="row">
                    <div className="text-left col-md-4 col-12">
                      <div className="link-heading">
                        <a href="#">Mobile Apps</a>
                      </div>
                      <ul>
                        <li><a href="#">
                          <div class="header-icon ios"></div>IOS App</a></li>
                        <li><a href="#">
                          <div class="header-icon android"></div>Android App</a></li>
                        <li><a href="#"><div class="header-icon react-native"></div>React Native App</a></li>
                        <li><a href="#"><div class="header-icon flutter"></div>flutter App</a></li>
                      </ul>
                    </div>
                    <div className="text-left col-md-4 col-12">
                      <div className="link-heading">
                        <a href="#">Web Apps</a>
                      </div>
                      <ul>
                        <li><a href="#">
                          <div class="header-icon fullstack"></div>Full Stack</a></li>
                        <li><a href="#">
                          <div class="header-icon reactjs"></div>React Js</a></li>
                        <li><a href="#"><div class="header-icon nodejs"></div>Node Js</a></li>
                        <li><a href="#"><div class="header-icon vuejs"></div>Vue Js </a></li>
                        <li><a href="#"><div class="header-icon java"></div>Java </a></li>
                        <li><a href="#"><div class="header-icon php"></div> PHP  </a></li>
                        <li><a href="#"><div class="header-icon phython"></div> Phython  </a></li>
                      </ul>
                    </div>
                    <div className="text-left col-md-4 col-12">
                      <div className="link-heading">
                        <a href="#">Digital Marketing</a>
                      </div>
                      <ul>
                        <li><a href="#">Column 1 link 1</a></li>
                        <li><a href="#">Column 1 link 2</a></li>
                        <li><a href="#">Column 1 link 3</a></li>
                      </ul>
                    </div>
                  </div>
              </div>
              </div>
            </li>

            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
