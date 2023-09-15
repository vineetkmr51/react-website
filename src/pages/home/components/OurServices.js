import React from "react";
import Value1 from '../../../assets/images/values-1.png';

function OurServices() {
  return (
    <section id="services" className="services">

      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Why Work With Us</h2>
          <p>Veritatis et dolores facere numquam et praesentium</p>
        </div>

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-box blue">
              <i className="ri-discuss-line icon"></i>
              <h3>Agile throughout our processes</h3>
              <p>We are following the agile development process till the next methodological marvel drops.</p>
              {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-box red">
              <i className="ri-discuss-line icon"></i>
              <h3>Go-live in a zap</h3>
              <p>We follow the Iterative development model to facilitate effective software life cycle management that ultimately reduces the go-live timeline for MVPs to only 8-12 weeks.</p>
              {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-box green">
              <i className="ri-discuss-line icon"></i>
              <h3>Speedy software delivery</h3>
              <p>We carry out bi-weekly sprints, facilitate regular code push, and follow CI/CD model for rapid build deployment and quicker delivery.</p>
              {/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default OurServices;
