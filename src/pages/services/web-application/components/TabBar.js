import React from 'react';
import { Link } from 'react-router-dom';
import ServicesData from './fullstackData';
import { Col, Row } from 'react-bootstrap';

function WebApplication() {
  return (
    <div className="services-bar">
      <div className="container">
        <div class="padding-xl">
          <Row className="d-flex justify-content-center">
            <Col lg="12">
              <div className="list-group">
                {ServicesData.map((list, index) => (
                  <div className="item pt-5 pb-5 mb-2">
                    <div className="d-block mb-3 align-items-center d-md-flex justify-content-between">
                      <h4 className="mb-0">{list.heading}</h4>
                      <Link
                        to={list.href}
                        className="mt-2 mt-md-0 btn lg btn-primary"
                      >
                        Learn More
                      </Link>
                    </div>
                    <p>{list.content}</p>
                    <ul>
                      {list.DellInner.map((listItem, item) => (
                        <li>{listItem.items}</li>
                      ))}
                    </ul>
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
