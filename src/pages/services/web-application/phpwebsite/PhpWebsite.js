import React from 'react';
import { Helmet } from 'react-helmet';
import Consultation from '../../../../components/consultation-bar';

import DreamContent from './components/DreamContent';
import InnerBanner from './components/InnerBanner';
import TabBar from './components/TabBar';

const Smo = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>PHP Development Services | PHP Development Company</title>
        <meta property="og:title" content="PHP Development" />
        <meta property="og:description" content="Radiansys is a leading PHP Development Company offering reliable development solutions. We offer best quality PHP Development Services" />
        <meta
          property="og:image"
          content="https://www.radiansys.com/consulting-services.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="PHP Development" />
        <meta name="twitter:description" content="Radiansys is a leading PHP Development Company offering reliable development solutions. We offer best quality PHP Development Services" />
        <meta
          name="twitter:image"
          content="https://www.radiansys.com/consulting-services.png"
        />
        <meta
          name="description"
          content="Radiansys is a leading PHP Development Company offering reliable development solutions. We offer best quality PHP Development Services"
        />
        <link
          rel="canonical"
          href="https://www.radiansys.com/technologies/web-development-services/php-development"
        />
        <meta
          property="og:url"
          content="https://www.radiansys.com/technologies/web-development-services/php-development"
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
