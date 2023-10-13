import React from 'react'
import Banner from './components/Banner'
import WhoWeAre from './components/WhoWeAre';
import OurValue from './components/OurValue';
import OurServices from './components/OurServices';
import OurWork from './components/OurWork';
import Blog from './components/Blog';
import Consultation from "../../components/consultation-bar";


function Home() {
    return (
      <div>
        <Banner/>
        <WhoWeAre/>
        <OurValue/>
        <OurServices/>
        <OurWork/>
        <Blog/>
        <Consultation />
      </div>
    )
  }
export default Home;
