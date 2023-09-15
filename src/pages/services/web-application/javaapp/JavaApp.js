import React from 'react';
import { Helmet } from 'react-helmet';
import Consultation from '../../../../components/consultation-bar';
import DreamContent from './components/DreamContent';
import InnerBanner from './components/InnerBanner';
import TabBar from './components/TabBar';

const JavaApp = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Java Development Company | Services | Radiansys</title>
        <meta property="og:title" content="Java Development" />
        <meta property="og:description" content="Radiansys is a leader among Java App Development Company. Our experienced team offers best Java App Development Services for all your needs." />
        <meta
          property="og:image"
          content="https://www.radiansys.com/consulting-services.png"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Java App Development" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://www.radiansys.com/wp-content/uploads/2019/03/inner-icons/consulting-services.png"
        />
        <meta name="geo.placename" content="Fremont" />
        <meta name="geo.position" content="37.550494;-121.974042" />
        <meta name="geo.region" content="US" />
        <meta
          name="description"
          content="Radiansys is a leader among Java App Development Company. Our experienced team offers best Java App Development Services for all your needs."
        />
        <link
          rel="canonical"
          href="https://www.radiansys.com/technologies/web-development-services/java-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.radiansys.com/technologies/web-development-services/java-development"
        />
      </Helmet>
        <InnerBanner />
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default JavaApp;
