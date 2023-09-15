import React from 'react';
import { Link } from 'react-router-dom';
import ServicesData from './servicesData';
import { Col, Row } from 'react-bootstrap';

function Services() {
  return (
    <div className="services-bar">
      <div className="container">
        <div className="">
          <Row className="d-flex justify-content-center">
            <Col lg="12">
              <div className="list-group">
                {ServicesData.map((list, index) => (
                  <div className="item pt-4 pb-3 mb-2">
                    <div className="d-block mb-3 align-items-center d-md-flex justify-content-between">
                      <h4 className="mb-0">{list.heading}</h4>
                      <Link
                        to={list.href}
                        className="mt-2 mt-md-0 btn btn-primary"
                      >
                        Learn More
                      </Link>
                    </div>
                    <p>{list.content}</p>
                    <p>{list.content1}</p>
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

export default Services;
