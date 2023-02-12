import React from "react";
import '../App.css';
import {useLocation} from 'react-router-dom';
import Hexagon from "./Hexagon";

export default function DamageRatio() {

  const location = useLocation();
  let year = '';
  if (location?.state?.year) {
    year = `&$filter=year/year eq ${location.state.year}`;
  }
       
  // REPLACE iframe base URL here (the link to the PowerBI report)
  const baseURL = "https://app.powerbi.com/reportEmbed?reportId=7a23b2a8-17a2-471e-b5cf-27deb787c65c&autoAuth=true&ctid=c0a02e2d-1186-410a-8895-0a4a252ebf17"
  console.log(baseURL+year)
  return (
    <div className="pageBody">
      {/* <Hexagon width={100}/> */}
      {/* <h2>Damage Ratio</h2> */}
      {/* <div className="iframe-height">
        <iframe title="EDGE_planning1_RC_11092022" width="100%" height="100%" src={baseURL+year} frameborder="0" allowFullScreen="true"></iframe>
      </div> */}
    </div>
  )
}