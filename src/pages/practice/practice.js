
import { Helmet } from 'react-helmet';

import PracticeSection from './components/practice-section';
import InnerBanner from './components/InnerBanner';

const Practice = () => {

  return (
    <div className="demo-page">
      <Helmet>
        <title>
        Practice Page | Support | Feedback | Best Cloud Services | ilitesoft
        </title>
      </Helmet>
      {/* <InnerBanner /> */}
      <PracticeSection />
    </div>
  );
};

export default Practice;
