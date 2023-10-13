import React from "react";
import { Helmet } from "react-helmet";
import Consultation from "../../../../components/consultation-bar";
import DreamContent from "./components/DreamContent";
import InnerBanner from "./components/InnerBanner";
import TabBar from "./components/TabBar";

const Smo = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Node Development Company | Services | ilitesoft</title>
        <meta property="og:title" content="NodeJS Development" />
        <meta property="og:description" content="ilitesoft is a leading Node Development Company offering services worldwide. We offer scalable Nodejs Development Service for your App needs" />
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="NodeJS Development" />
        <meta name="twitter:description" content="ilitesoft is a leading Node Development Company offering services worldwide. We offer scalable Nodejs Development Service for your App needs" />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta
          name="description"
          content="ilitesoft is a leading Node Development Company offering services worldwide. We offer scalable Nodejs Development Service for your App needs"
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/technologies/web-development-services/node-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/technologies/web-development-services/node-development"
        />
        <meta property="og:site_name" content="ilitesoft" />

      </Helmet>
        <InnerBanner />
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default Smo;
