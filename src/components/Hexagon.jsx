import React from "react";
import './Hexagon.scss'

export default function Hexagon({ width, data, color }) {
  const colorArray = [
    "#00BCF1", "#00B5AF"
  ]

  const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

  return (
    <>
      <div
        className="basicHexagon"
        style={{ backgroundColor: color, width: width, height: width * 1.1547 }}
      >
        { data?.KPIs &&
          <div className="pageLevelHexagonContainer">
            {/* <div className="lineAnimation"></div> */}
            <div className="pageLevelPlus"></div>
            <div className="pageName">{data?.Name?.toUpperCase()}</div>
            <div className="primaryKPI">
              {data?.PrimaryKPI && `${data?.PrimaryKPI?.Name}: `}
              {data?.PrimaryKPI?.Values[0] ? data?.PrimaryKPI?.Values[0]?.Value : "No Primary KPI data"}
            </div>
          </div>
        }
        { !data?.KPIs &&
          <div className="pageLevelHexagonContainer">
            <div className="pageLevelPlus"></div>
            <div className="pageName">{data?.Name?.toUpperCase()}</div>
            <div className="primaryKPI">
              {data?.PrimaryKPI && `${data?.PrimaryKPI?.Name}: `}
              {data?.PrimaryKPI?.Values[0] ? data?.PrimaryKPI?.Values[0]?.Value : "No Primary KPI data"}
            </div>
          </div>
        }
      </div>
      <div
        className="hexagonBorder"
        style={{ backgroundColor: "white", width: width + 8, height: (width + 8) * 1.1547 }}
      >
      </div>
    </>
  );
}