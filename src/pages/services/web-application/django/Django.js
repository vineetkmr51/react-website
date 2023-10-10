import React from "react";
import { Helmet } from "react-helmet";
import Consultation from "../../../../components/consultation-bar";
import DreamContent from "./components/DreamContent";
import InnerBanner from "./components/InnerBanner";
import TabBar from "./components/TabBar";

const Django = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Django Development Services | Django Development Company</title>
        <meta property="og:title" content="Django Development Services" />
        <meta
          property="og:description"
          content="Django development services are highly sought after these days. ilitesoft is the perfect Django development company with the best Django experts at work."
        />
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Python Development Services" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta name="geo.placename" content="Fremont" />
        <meta name="geo.position" content="37.550494;-121.974042" />
        <meta name="geo.region" content="US" />
        <meta
          name="description"
          content="Django development services are highly sought after these days. ilitesoft is the perfect Django development company with the best Django experts at work."
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/technologies/web-development-services/django-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/technologies/web-development-services/django-app-development"
        />
      </Helmet>
        <InnerBanner />
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default Django;
