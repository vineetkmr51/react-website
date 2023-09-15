import React from 'react'
import InnerBanner from './components/InnerBanner'
import BuildingProcess from './components/BuildingProcess'
import TabBar from './components/TabBar'
import Consultation from "../../components/consultation-bar";

function Services() {
    return (
      <div className="inner-services">
        <InnerBanner/>
        <BuildingProcess/>
        <TabBar/>
        <Consultation />
      </div>
    )
  }
export default Services;
