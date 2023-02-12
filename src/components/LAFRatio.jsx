import React from "react";
import '../App.css';
import {useLocation} from 'react-router-dom';

export default function LAFRatio() {

  const location = useLocation();
  let year = '';
  if (location?.state?.year) {
    year = `&$filter=${location.state.year}`;
  }
       
  // REPLACE iframe base URL here (the link to the PowerBI report)
  const baseURL = "https://app.powerbi.com/reportEmbed?reportId=7a23b2a8-17a2-471e-b5cf-27deb787c65c&autoAuth=true&ctid=c0a02e2d-1186-410a-8895-0a4a252ebf17&pageName=ReportSection3dd84b5e297cc3968315?ctid=c0a02e2d-1186-410a-8895-0a4a252ebf17&filterPaneEnabled=false&navContentPaneEnabled=false";
  console.log(baseURL+year)
  return (
    <div className="pageBody">
      <h2>Locator At-Fault Ratio</h2>
      <div className="iframe-height">
        <iframe title="EDGE_planning1_RC_11092022" width="100%" height="100%" src={baseURL+year} frameborder="0" allowFullScreen="true"></iframe>
      </div>
    </div>
  )
}