import React from "react";
import Portfolio1 from "../../../assets/images/portfolio/portfolio-1.jpg";
import Portfolio2 from "../../../assets/images/portfolio/portfolio-2.jpg";
import Portfolio3 from "../../../assets/images/portfolio/portfolio-3.jpg";
import Portfolio4 from "../../../assets/images/portfolio/portfolio-4.jpg";

function OurWork() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Featured Projects</h2>
          {/* <p>Check our latest work</p> */}
        </div>
        <div
          className="row gy-4 portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="col-lg-6 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap right-top">
              <div className="port-image">
                <img src={Portfolio1} className="img-fluid" alt="" />
              </div>
              <a href="#" className="portfolio-info">
                <h4>Phygi Survey Admin</h4>
                <p>Web Application</p>
                <div className="portfolio-links">
                  <i className="bi bi-arrow-right-circle"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap right-bottom">
              <div className="port-image">
                <img src={Portfolio2} className="img-fluid" alt="" />
              </div>
              <a href="#" className="portfolio-info">
                <h4>Phygi Survey Admin</h4>
                <p>Web Application</p>
                <div className="portfolio-links">
                  <i className="bi bi-arrow-right-circle"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap right-bottom">
              <div className="port-image">
                <img src={Portfolio3} className="img-fluid" alt="" />
              </div>
              <a href="#" className="portfolio-info">
                <h4>Phygi Survey Admin</h4>
                <p>Web Application</p>
                <div className="portfolio-links">
                  <i className="bi bi-arrow-right-circle"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap right-bottom">
              <div className="port-image">
                <img src={Portfolio4} className="img-fluid" alt="" />
              </div>
              <a href="#" className="portfolio-info">
                <h4>Phygi Survey Admin</h4>
                <p>Web Application</p>
                <div className="portfolio-links">
                  <i className="bi bi-arrow-right-circle"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWork;
