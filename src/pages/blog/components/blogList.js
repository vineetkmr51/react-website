import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import BlogListData from './blogListData';

function BlogList() {
  return (
    <div className="blog-card pt-4 pt-lg-5">
      <Container>
        <div className="padding-xl">
          <div className="team-section pb-md-5">
            <Row>
              {BlogListData.map((list, index) => (
                <div className="col-md-4">
                  <div className="card">
                    <Link to={list.href}>
                      <div className="img">
                        <img src={list.blogImage} alt={list.name} />
                      </div>
                    </Link>
                    <span>{list.category}</span>
                    <Link to={list.href}>
                      <h3>{list.name}</h3>
                    </Link>
                    <em>{list.date}</em>
                  </div>
                </div>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BlogList;
