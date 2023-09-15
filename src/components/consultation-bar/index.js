import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Consultation() {
  const history = useHistory();

  useEffect(() => {
    const scrollTo = history?.location?.state?.scrollTo
    if(scrollTo){
      window.scrollTo(0, scrollTo)
    }
  }, []);
  return (
    <section className="consultation-bar position-up">
      <Container>
        <div className="padding-xl">
          <Row className="d-flex justify-content-center">
            <Col md="12" xl="9">
              <div className="w-100 text-left text-lg-center d-block d-md-flex align-items-center">
                <h5 className=" mb-1">
                  Have a project in mind? Schedule a free consultation today.
                </h5>
                <button
                  onClick={() => {
                    history.push({pathname: "/contact-sales", state: {scrollPos: window.scrollY, from: "/our-customers"}});
                  }}
                  className="btn mt-4 ms-5 mt-md-0  btn-primary"
                >
                  Contact Sales
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Consultation;
