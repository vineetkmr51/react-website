import React, { useState } from 'react';
import FooterLogo from '../../assets/images/dot-logo.svg';
import { Link } from 'react-router-dom';
import Facebook from '../../assets/images/facebook.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Twitter from '../../assets/images/twitter.svg';
import { Col, Row, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import SalesForce from '../header/salesforceMenu';
import Web from '../header/webMenu';
import Aws from '../header/awsMenu';
import Dell from '../header/dellMenu';
import Mobile from '../header/mobileMenu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
function Footer() {
  const isMobile = useMediaQuery('(max-width:500px)');
  const location = useLocation();
  const [visibility, setVisibility] = useState(true);
  React.useEffect(() => {
    const loc = location.pathname.split('/');
    const project = loc?.findIndex((val) => val === 'work');
    const companySalesPage = loc?.findIndex((val) => val === 'contact-sales');

    if ((project !== -1 && loc[project + 1]) || companySalesPage !== -1) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  }, [location, isMobile]);
  return (
    <footer
      className="position-up"
      style={visibility ? {} : { display: 'none' }}
    >
      <Container>
        <div className="padding-xl">
          <div className="">
            <Row>
              <Col lg="1" xl="2">
                <div className="footer-logo mb-4 mb-md-4 pb-3 pb-md-0">
                  <img src={FooterLogo} alt="Logo" />
                </div>
              </Col>
              <Col lg="11" xl="10">
                <Row>
                  <Col md="2" xs="6">
                    <div className="footer-links mb-4 mb-md-0">
                      <h6>Company</h6>
                      <Link to="/">Home</Link>
                      <Link to="/about-us">About Us</Link>
                      {/* <Link to="/feature-project">Portfolio</Link> */}
                      <Link to="/our-customers">Customers</Link>
                      <Link to="/blog">Blogs</Link>
                      <Link to="/career">Career</Link>
                      <Link to="/contact-us">Contact</Link>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="footer-links mb-4 mb-md-0">
                      <h6>Salesforce</h6>
                      {SalesForce.map((item, index) => (
                        <Link to={item.url}>{item.name}</Link>
                      ))}
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="footer-links mb-4 mb-md-0">
                      <h6>Aws</h6>
                      {Aws.map((item, index) => (
                        <Link to={item.url}>{item.name}</Link>
                      ))}
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="footer-links mb-4 mb-md-0">
                      <h6>Dell Boomi</h6>
                      {Dell.map((item, index) => (
                        <Link to={item.url}>{item.name}</Link>
                      ))}
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="footer-links mb-4 mb-md-0">
                      <h6>Mobile App</h6>
                      {Mobile.map((item, index) => (
                        <Link to={item.url}>{item.name}</Link>
                      ))}
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="footer-links mb-4 mb-md-0">
                      <h6>Web App</h6>
                      {Web.map((item, index) => (
                        <Link to={item.url}>{item.name}</Link>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="bottom-footer mt-5 pt-md-5 w-100">
            <Row>
              <Col md="6">
                <div className="social text-center text-md-left">
                  <a
                    href="https://www.linkedin.com/company/radiansys-inc"
                    className="linkedin mr-3"
                    target="_blank"
                  >
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                  <a
                    href="https://www.facebook.com/Radiansys"
                    className="facebook  mr-3"
                    target="_blank"
                  >
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  <a
                    href="https://twitter.com/RadiansysINC"
                    className="twitter mr-0"
                    target="_blank"
                  >
                    <img src={Twitter} alt="Twitter" />
                  </a>
                </div>
              </Col>
              <Col md="6">
                <div className="copyright mt-4 pt-3 pt-md-0 mb-5 mb-md-0 mt-md-0 text-center text-md-right">
                  <p className="mb-0">© 2021 Radiansys. All rights reserved.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      <div class="fixed-bottom p-4 d-none">
        <div class="toast bg-dark text-white w-100 mw-100" role="alert">
          <div class="toast-body p-4 d-flex flex-column">
            <Row>
              <Col md="8">
                <div className="cookies-text">
                  {' '}
                  <h6>Cookie Warning</h6>
                  <p>
                    This website stores data such as cookies to enable site
                    functionality including analytics and personalization. By
                    using this website, you automatically accept that we use
                    cookies.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div class="text-right w-100 pt-4">
                  <button type="button" class="btn btn-primary" id="btnAccept">
                    Accept
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
