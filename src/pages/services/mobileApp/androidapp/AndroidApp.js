import React from "react";
import { Helmet } from "react-helmet";
import Consultation from "../../../../components/consultation-bar";
import DreamContent from "./components/DreamContent";
import InnerBanner from "./components/InnerBanner";
import TabBar from "./components/TabBar";

const AndroidApp = () => {
  return (
    <div className="inner-services">
      <Helmet>
        <title>Android Mobile App Development Company | Radiansys</title>
        <meta property="og:title" content="Android App Development" />
        <meta property="og:description" content="Radiansys is a leading Android App Development Company serving customer all over the world. We are expert in android mobile app development." />
        <meta
          property="og:image"
          content="https://www.radiansys.com/consulting-services.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Android App Development" />
        <meta name="twitter:description" content="Radiansys is a leading Android App Development Company serving customer all over the world. We are expert in android mobile app development." />
        <meta
          name="twitter:image"
          content="https://www.radiansys.com/consulting-services.png"
        />
        <meta name="geo.placename" content="Fremont" />
        <meta name="geo.position" content="37.550494;-121.974042" />
        <meta name="geo.region" content="US" />
        <meta
          name="description"
          content="Radiansys is a leading Android App Development Company serving customer all over the world. We are expert in android mobile app development."
        />
        <link
          rel="canonical"
          href="https://www.radiansys.com/technologies/mobile-app-development-services/android-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.radiansys.com/technologies/mobile-app-development-services/android-app-development"
        />
      </Helmet>
        <InnerBanner />
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default AndroidApp;
