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
        <title>Python Development Services | Python Development Company</title>
        <meta property="og:title" content="Python Development Services" />
        <meta
          property="og:description"
          content="ilitesoft has proven records for providing the best Python development services. We are a supreme Python development company to work with due to our major expertise."
        />
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Python Development Services" />
        <meta name="twitter:description" content="ilitesoft has proven records for providing the best Python development services. We are a supreme Python development company to work with due to our major expertise." />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/consulting-services.png"
        />

        <meta
          name="description"
          content="ilitesoft has proven records for providing the best Python development services. We are a supreme Python development company to work with due to our major expertise."
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/technologies/web-development-services/python-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/technologies/web-development-services/python-app-development"
        />
        <meta property="og:site_name" content="ilitesoft" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/ilitesoft"
        />

      </Helmet>
        <InnerBanner />
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default Smo;
