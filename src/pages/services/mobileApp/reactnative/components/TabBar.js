import React from 'react';
import ReactNativeData from './ReactNativeData';
import { Col, Row } from 'react-bootstrap';

function WebApplication() {
  return (
    <div className="services-bar">
      <div className="container">
        <Row className="d-flex justify-content-center">
          <Col lg="12">
            <div className="list-group">
              {ReactNativeData.map((list, index) => (
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
  );
}

export default WebApplication;
