import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogGridData from './blogGridData';

function MainBlog() {
  return (
    <div className="blog-highlight pb-2 pb-md-5">
      <Container>
        {BlogGridData.map((grid, index) => (
          <div className="padding-xl">
            <Row>
              <Col lg="7">
                <div class="image-section d-flex align-items-center justify-content-center">
                  <Link to={grid.href}>
                    <img src={grid.blogImage} alt={grid.name} />
                  </Link>
                </div>
              </Col>

              <Col lg="5">
                <div className="content d-flex align-items-center">
                  <div className="w-100 pt-lg-2">
                    <h6 className="uppercase pt-3 pt-lg-0">{grid.category}</h6>
                    <Link to={grid.href}>
                      <h2 className="pt-0 pb-md-2 pb-lg-0 pt-lg-0">
                        {grid.name}
                      </h2>
                    </Link>
                    <em className="blog-date">{grid.date}</em>
                    <p>{grid.content}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default MainBlog;
