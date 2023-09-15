import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import DjangoLogo from '../../../../../assets/images/django-logo.png';

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
                        Expertise is a must for Django web development and
                        Radiansys has the rightly skilled team for it. Our
                        Django experts can build the best web platform using
                        Django alongside ensuring its quality, security, and
                        operability.
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
