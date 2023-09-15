import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function DreamContent() {
  return (
    <div className="building-process d-flex align-items-center">
      <Container>
        <div class="padding-xl">
          <Row>
            <Col lg="12">
              <div className="content d-flex align-items-center text-center">
                <div className="w-100">
                  <div className="row ">
                    <div className="col-lg-12 col-xl-12">
                      <h2 className="mb-4">What to Expect</h2>
                      <p>
                        ilitesoft offers complete NodeJS services to businesses
                        that want highly customized web apps. With our help, you
                        can take advantage of this cross-platform JavaScript
                        framework to create web apps that scale well, work
                        across multiple devices, and provide real-time responses
                        for customers.
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
