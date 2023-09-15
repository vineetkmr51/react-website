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
        <title>
          Social Media Optimization Services | SMO Services | Company
        </title>
        <meta property="og:title" content="Social Media Optimization" />
        <meta
          property="og:description"
          content="Social Media Optimization Services Technologies Digital Marketing Services Social Media Optimization What To Expect Nearly everyone has a social media presence today"
        />
        <meta
          property="og:image"
          content="https://www.ilitesoft.com/media-presence.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Social Media Optimization" />
        <meta
          name="twitter:description"
          content="Social Media Optimization Services Technologies Digital Marketing Services Social Media Optimization What To Expect Nearly everyone has a social media presence today"
        />
        <meta
          name="twitter:image"
          content="https://www.ilitesoft.com/media-presence.png"
        />
        <meta
          name="description"
          content="ilitesoft offers top-class Social Media Optimization Services, Our SMO services help businesses or company achieve a strong online presence."
        />
        <link
          rel="canonical"
          href="https://www.ilitesoft.com/technologies/digital-marketing-services/social-media-optimization"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.ilitesoft.com/technologies/digital-marketing-services/social-media-optimization"
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
