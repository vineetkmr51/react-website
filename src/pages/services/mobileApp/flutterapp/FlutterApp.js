import React from "react";
import { Helmet } from "react-helmet";
import Consultation from "../../../../components/consultation-bar";
import DreamContent from "./components/DreamContent";
import InnerBanner from "./components/InnerBanner";
import TabBar from "./components/TabBar";

const FlutterApp = () => {
  return (
    <div className="inner-services">
      <Helmet>
        <title>
          Flutter Development Services | Flutter Development Company
        </title>
        <meta property="og:title" content="MEAN Stack Development" />
        <meta
          property="og:description"
          content="Flutter development services are high in demand in the app world. ilitesoft is a trusted Flutter development company working with the best experts."
        />
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Flutter Development Services" />
        <meta
          name="twitter:description"
          content="Flutter development services are high in demand in the app world. ilitesoft is a trusted Flutter development company working with the best experts."
        />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta name="geo.placename" content="Fremont" />
        <meta name="geo.position" content="37.550494;-121.974042" />
        <meta name="geo.region" content="US" />
        <meta
          name="description"
          content="Flutter development services are high in demand in the app world. ilitesoft is a trusted Flutter development company working with the best experts."
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/technologies/mobile-app-development-services/flutter-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/technologies/mobile-app-development-services/flutter-app-development"
        />
      </Helmet>
      <InnerBanner />
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default FlutterApp;
