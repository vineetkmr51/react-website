import React from "react";
import { Helmet } from "react-helmet";
import Consultation from "../../../../components/consultation-bar";

import DreamContent from "./components/DreamContent";
import InnerBanner from "./components/InnerBanner";
import TabBar from "./components/TabBar";

const Seo = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>
          Expert SEO Services Company | Search Engine Optimization Services
        </title>
        <meta property="og:title" content="SEO" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://www.radiansys.com/content.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SEO" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://www.radiansys.com/content.png"
        />
        <meta
          name="description"
          content="Choose an expert SEO services company with a proven track record. Radiansys is the best search engine optimization services provider in USA."
        />
        <link
          rel="canonical"
          href="https://www.radiansys.com/technologies/digital-marketing-services/search-engine-optimization"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.radiansys.com/technologies/digital-marketing-services/search-engine-optimization"
        />
      </Helmet>

        <InnerBanner />

      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default Seo;
