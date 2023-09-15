import React from 'react';
import iosData from './iosData';
import { Col, Row } from 'react-bootstrap';

function IOSApplication() {
  return (
    <div className="services-bar">
      <div class="padding-xl">
        <div className="container">
          <Row className="d-flex justify-content-center">
            <Col lg="12">
              <div className="list-group">
                {iosData.map((list, index) => (
                  <div className="item pt-5 pb-5 mb-2">
                    <div className="d-block mb-3 align-items-center d-md-flex justify-content-between">
                      <h4 className="mb-0">{list.heading}</h4>
                    </div>
                    <p>{list.content}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default IOSApplication;
