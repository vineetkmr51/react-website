import React from 'react';
import { Helmet } from 'react-helmet';
import Consultation from '../../../components/consultation-bar';
import DreamContent from './components/DreamContent';
import InnerBanner from './components/InnerBanner';
import TabBar from './components/TabBar';

const MobileApp = () => {
  return (
    <div className="inner-services">
     <Helmet>
        <title>
          Mobile App Development Services Company in USA | ilitesoft
        </title>
        <meta
          property="og:title"
          content="Mobile App Development Services Company in USA | ilitesoft"
        />
        <meta
          property="og:description"
          content="ilitesoft is a Leading Mobile App Development Company in USA. We develop custom mobile Apps for iOS and Android. Ask for a free consultation now."
        />
      </Helmet>
      <InnerBanner />
      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default MobileApp;
