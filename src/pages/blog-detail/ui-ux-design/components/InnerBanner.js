import React from 'react';
import { Container } from 'react-bootstrap';
import BlogImage from '../../../../assets/images/blog/ui-ux-md.jpg';

function InnerBanner() {
  return (
    <div className="blog-content">
      <Container>
        <div className="padding-xl">
          <div class="image-section">
            <img src={BlogImage} alt="UI/UX Design tools" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default InnerBanner;
