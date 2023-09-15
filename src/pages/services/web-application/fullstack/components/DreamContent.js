import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function DreamContent() {
  return (
    <div className="building-process d-flex align-items-center">
      <Container>
        <div class="padding-xl">
          <Row>
            <Col lg="12">
              <div className="content d-flex align-items-center">
                <div className="w-100">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">
                      <h2 className="mb-4">What to Expect</h2>
                      <p>
                        Radiansys offers comprehensive full-stack development
                        services to businesses that want to offer well-rounded
                        web apps equipped to attract new customers. Our
                        full-stack development services include everything from
                        full-stack consulting to crafting scalable custom
                        solutions with the agile method.
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
