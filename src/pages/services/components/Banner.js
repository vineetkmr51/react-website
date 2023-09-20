import React from "react";
import HeroImg from '../../../assets/images/hero-img.png';

function Banner() {
  return (
    <section className="inner-banner d-flex align-items-center">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Our Services</h1>
                <p>We help businesses succeed with the major quintessential cloud services developed by an accomplished technical team.</p>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                <img src={HeroImg} className="img-fluid" alt=""/>
            </div>
        </div>
    </div>
</section>
  );
}

export default Banner;
