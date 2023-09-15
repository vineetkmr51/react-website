import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function DreamContent() {
  return (
    <div className="dream-section">
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
                        Radiansys’ leading Java app development services are
                        well-suited to businesses looking to develop robust web
                        applications for their customers. As both a backend and
                        a frontend language, Java is one of the most
                        well-rounded traditional languages available. Our Java
                        developers provide full Java services, from Java
                        programming consultation to long-term Java web app
                        support.
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
