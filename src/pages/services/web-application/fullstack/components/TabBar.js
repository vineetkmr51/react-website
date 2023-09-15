import React from 'react';
import FullStackData from './fullStackData';
import { Col, Row } from 'react-bootstrap';

function WebApplication() {
  return (
    <div className="services-bar">
      <div className="container">
        <div class="padding-xl">
          <Row className="d-flex justify-content-center">
            <Col lg="12">
              <div className="list-group">
                {FullStackData.map((list, index) => (
                  <div className="item pt-4 pb-3 mb-2">
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

export default WebApplication;