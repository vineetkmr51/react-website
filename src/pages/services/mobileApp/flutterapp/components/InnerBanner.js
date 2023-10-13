import React from "react";
import HeroImg from '../../../../../assets/images/hero-img.png';

function InnerBanner() {
  return (
    <section className="inner-banner d-flex align-items-center">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Flutter App Development</h1>
                {/* <p>Bring your business to everyone everywhere with our mobile app development services and expand your horizons.
</p> */}
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                <img src={HeroImg} className="img-fluid" alt=""/>
            </div>
        </div>
    </div>
</section>
  );
}

export default InnerBanner;
