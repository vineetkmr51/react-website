import React from "react";
import Value1 from '../../../assets/images/values-1.png';
import Value2 from '../../../assets/images/values-2.png';
import Value3 from '../../../assets/images/values-3.png';

function OurValue() {
  return (
    <section id="values" className="values">

      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>What We Deliver</h2>
          <p>We define business processes through ideation,<br/> creation, and optimization with a team of exceptional strategists.</p>
        </div>

        <div className="row">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <img src={Value1} className="img-fluid" alt=""/>
              <h3>Product Development</h3>
              <p>We ideate and develop unique software solutions to help businesses meet their exact objectives.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
            <div className="box">
              <img src={Value2} className="img-fluid" alt=""/>
              <h3>Product Consultation</h3>
              <p>We offer SaaS consultation to help businesses tread on visionary and strategic framework.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
            <div className="box">
              <img src={Value3} className="img-fluid" alt=""/>
              <h3>Product Optimization</h3>
              <p>We optimize products through advanced updates to make them efficient and promisingly growing.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default OurValue;
