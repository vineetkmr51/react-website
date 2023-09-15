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
            <li className="dropdown megamenu">
              <Link to="/services" className="nav-link scrollto">
                <span>Services</span> <i className="bi bi-chevron-down"></i>
              </Link>

              <div className="dropdown-menu">
                <div className="events-nav">
                  <div className="row">
                    <div className="text-left col-md-4 col-12">
                      <div className="link-heading">
                        <Link to="/services/mobile-app-development">
                          Mobile App
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link to="/services/mobile-app-development/ios-development">
                            <div class="header-icon"></div>IOS App
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/mobile-app-development/android-app-development">
                            <div class="header-icon "></div>Android App
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/mobile-app-development/react-native-app-development">
                            <div class="header-icon"></div>React Native App
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="/services/mobile-app-development/flutter-app-development">
                            <div class="header-icon"></div>flutter App
                          </Link>
                        </li> */}
                      </ul>
                      <div className="link-heading">
                        <Link to="/services/mobile-app-development">
                          Integrations
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link to="/services/mobile-app-development">
                            <div class="header-icon"></div>Payment Gateway
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="text-left col-md-4 col-12">
                      <div className="link-heading">
                        <Link to="/services/web-development-services">
                          Web App
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link to="/services/web-development-services/full-stack-development">
                            <div class="header-icon"></div>Full Stack
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/web-development-services/react-development">
                            <div class="header-icon"></div>React Js
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/web-development-services/node-development">
                            <div class="header-icon"></div>Node Js
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/web-development-services/vue-development">
                            <div class="header-icon"></div>Vue Js
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/web-development-services/java-development">
                            <div class="header-icon"></div>Java
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/web-development-services/php-development">
                            <div class="header-icon"></div>PHP
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/web-development-services/python-app-development">
                            <div class="header-icon"></div>Phython
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="text-left col-md-4 col-12">
                      <div className="link-heading">
                        <Link to="/services/digital-marketing-services">
                          Digital Marketing
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link to="/services/digital-marketing-services/search-engine-optimization">
                            <div class="header-icon"></div>SEO
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/digital-marketing-services/social-media-optimization">
                            <div class="header-icon"></div>SMO
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link scrollto">
                Portfolio
              </Link>
            </li>

            <li>
              <Link to="/blog" className="nav-link scrollto">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="getstarted scrollto">
                Contact Us
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
