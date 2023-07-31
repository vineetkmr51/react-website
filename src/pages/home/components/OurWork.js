import React from "react";
import Portfolio1 from '../../../assets/images/portfolio/portfolio-1.jpg';
import Portfolio2 from '../../../assets/images/portfolio/portfolio-2.jpg';
import Portfolio3 from '../../../assets/images/portfolio/portfolio-3.jpg';
import Portfolio4 from '../../../assets/images/portfolio/portfolio-4.jpg';


function OurWork() {
  return (
    <section id="portfolio" className="portfolio">

      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Portfolio</h2>
          <p>Check our latest work</p>
        </div>
        <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-6 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={Portfolio1} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={Portfolio1} data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={Portfolio2}  className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={Portfolio2}  data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={Portfolio3} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={Portfolio3}  data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={Portfolio4}  className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={Portfolio4} data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 2"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={Portfolio2} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={Portfolio2}  data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 2"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={Portfolio2}  className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={Portfolio2}  data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 3"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={Portfolio2} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={Portfolio2}  data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 1"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={Portfolio2} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={Portfolio2} data-gallery="portfolioGallery" className="portfokio-lightbox" title="Card 3"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default OurWork;
