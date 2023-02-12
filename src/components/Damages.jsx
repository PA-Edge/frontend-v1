import React from "react";
import './Damages.scss';
import mockData from '../mockData.json';
import Hexagon from "./Hexagon";

export default function Damages() {

  return(
    <>
      <h1>COMING SOON</h1>
      <div className="home">
        <div className="homescreenBackground"></div>
        <div className="homescreenBackgroundRainbow"></div>
        <div className="hexContainer">
          {
            mockData.Pages[0].KPIs.map((KPI, i) => {
              <Hexagon width={200} data={KPI} color={i % 2 ? "#00BCF1" : "#00B5AF"} />
            })
          }
        </div>
        {/* <button className="CTA">Explore all Damages</button> */}
      </div>
    </>
  )
}