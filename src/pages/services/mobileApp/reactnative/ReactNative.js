import React from 'react';
import { Helmet } from 'react-helmet';
import Consultation from '../../../../components/consultation-bar';
import DreamContent from './components/DreamContent';
import InnerBanner from './components/InnerBanner';
import TabBar from './components/TabBar';

const ReactNative = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>
          React Native Development Services | React Native Development Company
        </title>
        <meta property="og:title" content="React Native Development Services" />
        <meta
          property="og:description"
          content="Choose the reliable React Native development services for a stable and sturdy app for your business. Radiansys is a trusted React Native development company."
        />
      </Helmet>

        <InnerBanner />

      <DreamContent />
      <TabBar />
      <Consultation />
    </div>
  );
};

export default ReactNative;
