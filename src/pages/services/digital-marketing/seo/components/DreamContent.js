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
                  <div className="row ">
                    <div className="col-lg-12 col-xl-12">
                      <h2 className="mb-4">What to Expect</h2>
                      <p>
                        As part of our extensive digital marketing offerings,
                        our search engine optimization services (SEO services)
                        are constantly in demand. Our expert SEO services
                        include tasks from content analysis to strategy
                        execution—and everything in between. If you’re ready to
                        start drawing consumers in, we’re the perfect SEO
                        services company for you.
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
