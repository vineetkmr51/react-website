import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function DreamContent() {
  return (
    <div className="building-process d-flex align-items-center">
      <Container>
        <div className="padding-xl">
          <Row>
            <Col lg="12">
              <div className="content d-flex align-items-center text-center">
                <div className="w-100">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">

                      <h2 className="mb-4">What to Expect</h2>
                      <p>
                        ilitesoft offers extensive PHP website development
                        services for businesses looking to deliver high-quality
                        uniform digital experiences to their customers. With
                        help from our PHP developers, you can use PHP’s strong
                        open source web technology to create a seamless web app.
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
