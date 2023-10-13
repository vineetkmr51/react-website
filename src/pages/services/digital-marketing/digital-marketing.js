import React from "react";
import { Helmet } from "react-helmet";
import Consultation from "../../../components/consultation-bar";

import DreamContent from "./components/DreamContent";
import InnerBanner from "./components/InnerBanner";
import TabBar from "./components/TabBar";

const DigitalMarketing = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Trusted Digital Marketing Services in USA | ilitesoft</title>
        <meta property="og:title" content="Digital Marketing Services" />
        <meta
          property="og:description"
          content="Digital Marketing Services Technologies Digital Marketing Services What To Expect Attract potential customers to your website with robust"
        />
        <meta property="og:image" content="https://www.ilitesoft.com/seo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Digital Marketing Services" />
        <meta
          name="twitter:description"
          content="Digital Marketing Services Technologies Digital Marketing Services What To Expect Attract potential customers to your website with robust"
        />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/seo.png"
        />
        <meta
          name="description"
          content="ilitesoft is a trusted Digital Marketing Services Company in USA. We offer online marketing solutions for SEO, SMO, ORM, Google AdWords &amp; PPC."
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/technologies/digital-marketing-services"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/technologies/digital-marketing-services"
        />
      </Helmet>

        <InnerBanner />

      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default DigitalMarketing;
