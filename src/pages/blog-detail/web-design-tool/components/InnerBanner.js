import React from 'react';
import { Container } from 'react-bootstrap';
import BlogImage from '../../../../assets/images/blog/design-tool-banner-detail-min.jpg';

function InnerBanner() {
  return (
    <div className="blog-content">
      <Container>
        <div className="padding-xl">
          <div className="image-section">
            <img src={BlogImage} alt="UI/UX Design tools" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default InnerBanner;
