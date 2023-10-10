import React from "react";
import { Helmet } from "react-helmet";
import Consultation from "../../../../components/consultation-bar";
import DreamContent from "./components/DreamContent";
import InnerBanner from "./components/InnerBanner";
import TabBar from "./components/TabBar";

const FullStack = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>
          Full Stack Development Services | Full Stack Development Company
        </title>
        <meta property="og:title" content="Full Stack Development" />
        <meta property="og:description" content="ilitesoft has proven track record for it&#039;s Full Stack Development Services. Your search for a trusted Full Stack Development Company ends here." />
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Full Stack Development" />
        <meta name="twitter:description" content="ilitesoft has proven track record for it&#039;s Full Stack Development Services. Your search for a trusted Full Stack Development Company ends here." />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta name="geo.placename" content="Fremont" />
        <meta name="geo.position" content="37.550494;-121.974042" />
        <meta name="geo.region" content="US" />
        <meta
          name="description"
          content="ilitesoft has proven track record for it&#039;s Full Stack Development Services. Your search for a trusted Full Stack Development Company ends here."
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/technologies/web-development-services/full-stack-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/technologies/web-development-services/full-stack-development"
        />
      </Helmet>
        <InnerBanner />
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default FullStack;
