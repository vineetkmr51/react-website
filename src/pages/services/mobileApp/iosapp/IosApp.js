import React from "react";
import { Helmet } from "react-helmet";
import Consultation from "../../../../components/consultation-bar";
import DreamContent from "./components/DreamContent";
import InnerBanner from "./components/InnerBanner";
import TabBar from "./components/TabBar";

const IosApp = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>
          iOS App Development Company | iOS App Developers | ilitesoft
        </title>
        <meta property="og:title" content="ios development" />
        <meta property="og:description" content="Your search for a trusted iOS App Development Company ends at ilitesoft. Our certified iOS App Developers ensure quality and on time delivery." />
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ios development" />
        <meta name="twitter:description" content="Your search for a trusted iOS App Development Company ends at ilitesoft. Our certified iOS App Developers ensure quality and on time delivery." />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta name="geo.placename" content="Fremont" />
        <meta name="geo.position" content="37.550494;-121.974042" />
        <meta name="geo.region" content="US" />
        <meta
          name="description"
          content="Your search for a trusted iOS App Development Company ends at ilitesoft. Our certified iOS App Developers ensure quality and on time delivery."
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/technologies/mobile-app-development-services/ios-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/technologies/mobile-app-development-services/ios-development"
        />
      </Helmet>
  
        <InnerBanner />
 
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default IosApp;
