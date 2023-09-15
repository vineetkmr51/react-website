import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function DreamContent() {
  return (
    <div className="building-process d-flex align-items-center">
      <Container>
        <div className="padding-xl">
          <Row>
            <Col lg="12">
              <div className="content d-flex align-items-center">
                <div className="w-100">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">
                      <h2 className="mb-4">Steady Growth for Your Business</h2>
                      <p>
                        The best digital marketing campaigns prove useful in
                        attracting more customers and bringing conversions. This
                        is the success mantra behind success of modern
                        businesses. We have a full package of digital marketing
                        services that promise augmented website traffic and a
                        fuller customer base.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default DreamContent;
