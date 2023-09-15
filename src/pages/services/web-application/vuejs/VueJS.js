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
        <title>Vue Development Company | Services | Radiansys</title>
        <meta property="og:title" content="VueJS Development" />
        <meta property="og:description" content="Radiansys, is a top Vue Development Company offering quality VueJS Development Services to clients all over the world." />
        <meta
          property="og:image"
          content="https://www.radiansys.com/consulting-services.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="VueJS Development" />
        <meta name="twitter:description" content="Radiansys, is a top Vue Development Company offering quality VueJS Development Services to clients all over the world." />
        <meta
          name="twitter:image"
          content="https://www.radiansys.com/consulting-services.png"
        />
        <meta
          name="description"
          content="Radiansys, is a top Vue Development Company offering quality VueJS Development Services to clients all over the world."
        />
        <link
          rel="canonical"
          href="https://www.radiansys.com/technologies/web-development-services/vue-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.radiansys.com/technologies/web-development-services/vue-development"
        />
        <meta property="og:site_name" content="Radiansys" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/Radiansys"
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
