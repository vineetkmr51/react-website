import React from 'react';
import { Helmet } from 'react-helmet';
import Consultation from '../../../components/consultation-bar';
import MainBlog from './components/mainBlog';
import InnerBanner from './components/InnerBanner';
const BlogLanding = () => {

  return (
    <div className="blog-detail">
      <Helmet>
        <title>Top 12 UI/UX design tools in 2021 | ilitesoft</title>
        <meta property="og:title" content="UI/UX design tools" />
        <meta
          property="og:description"
          content="In 2021, we have incredible UI/UX design tools capable of making resplendently efficient websites and interfaces. Check out the top 12 UI/UX designing tools that you can use."
        />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/design-tool-banner-detail-min.jpg"
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/blog/design-tool-banner-detail-min.jpg"
        />
        <meta
          name="description"
          content="In 2021, we have incredible UI/UX design tools capable of making resplendently efficient websites and interfaces. Check out the top 12 UI/UX designing tools that you can use."
        />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/design-tool-banner-detail-min.jpg"
        ></meta>
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/design-tool-banner-detail-min.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.ilitesoft.com/design-tool-banner-detail-min.jpg"
        />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/blog/ui-ux-design-tools"
        />
        {/* <meta name="author" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ilitesoftInc" />
        <meta name="twitter:creator" content="@ilitesoftInc" />
        <meta
          name="twitter:title"
          content="ilitesoft | Software Development and Consulting Company"
        />
        <meta
          name="twitter:description"
          content="React native and Flutter are changing the app development industry with their advanced cross-platform functionalities. Read more to know which will help you best."
        />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/react-flutter.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Software Development and Consulting Company"
        />
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/react-flutter.jpg"
        />

        <meta name="author" content="admin" />
        <meta name="geo.placename" content="Fremont" />
        <meta name="geo.position" content="37.550494;-121.974042" />
        <meta name="geo.region" content="US" />

        <meta
          property="og:title"
          content="ilitesoft | Software Development and Consulting Company"
        />
        <meta
          property="og:description"
          content="React native and Flutter are changing the app development industry with their advanced cross-platform functionalities. Read more to know which will help you best."
        />

        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="538" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      */}
      </Helmet>
    
        <InnerBanner />

      <MainBlog />
      <Consultation />
    </div>
  );
};

export default BlogLanding;
