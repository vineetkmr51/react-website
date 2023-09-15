import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function DreamContent() {
  return (
    <div className="dream-section">
      <Container>
        <div class="padding-xl">
          <Row>
            <Col lg="12">
              <div className="content d-flex align-items-center text-center">
                <div className="w-100">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">
                      <h2 className="mb-4">What to Expect</h2>
                      <p>
                        As a React Development Company, Radiansys helps
                        businesses create long-lasting, multi-use web apps.
                        ReactJS empowers businesses to use code across any
                        platform they please and also provides the benefits of
                        SEO-friendliness.
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
