import React from "react";
import { Helmet } from "react-helmet";
import Consultation from "../../../components/consultation-bar";
import DreamContent from "./components/DreamContent";
import InnerBanner from "./components/InnerBanner";
import TabBar from "./components/TabBar";

const WebApplication = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Best Web Development Services Company in USA | ilitesoft</title>
        <meta property="og:title" content="Web Development Services" />
        <meta
          property="og:description"
          content="ilitesoft is a reputed Web Development Services Company in USA. We Offer web design and development in ReactJS, NodeJS, VueJS, MEAN Stack, Java &amp; PHP."
        />
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/full-stack.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Web Development Services" />
        <meta
          name="twitter:description"
          content="ilitesoft is a reputed Web Development Services Company in USA. We Offer web design and development in ReactJS, NodeJS, VueJS, MEAN Stack, Java &amp; PHP."
        />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/full-stack.png"
        />
        <meta name="geo.placename" content="Fremont" />
        <meta name="geo.position" content="37.550494;-121.974042" />
        <meta name="geo.region" content="US" />
        <meta
          name="description"
          content="ilitesoft is a reputed Web Development Services Company in USA. We Offer web design and development in ReactJS, NodeJS, VueJS, MEAN Stack, Java &amp; PHP."
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/technologies/web-development-services"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/technologies/web-development-services"
        />
        <meta property="og:site_name" content="ilitesoft" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/ilitesoft"
        />
        <meta property="fb:app_id" content="2309817079299319" />
      </Helmet>
        <InnerBanner />
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default WebApplication;
