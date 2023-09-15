import React from 'react';
import { Helmet } from 'react-helmet';
import Consultation from '../../components/consultation-bar';
import InnerBanner from './components/InnerBanner';
import MainBlog from './components/mainBlog';
import BlogList from './components/blogList';


const BlogLanding = () => {

  return (
    <div className="blog-listing">
      <Helmet>
        <title>Resources | Blogs | Radiansys</title>
        <meta property="og:title" content="about-us" />
        <meta
          property="og:description"
          content="Our resources section is a place where you can find carefully researched insights on latest technologies, innovative ideas, guides, blogs, and much more. Learn more."
        />
      </Helmet>
      
        <InnerBanner />

      <MainBlog />
      {/* <BlogList /> */}
      <Consultation />
    </div>
  );
};

export default BlogLanding;
