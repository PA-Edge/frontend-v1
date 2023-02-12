import React from "react";
import "./CarouselItem.scss";
import Hexagon from "./Hexagon";
import mockData from "../mockData.json"

export default function CarouselItem() {

  const hexDataMock = {
    Name: "Future Page",
    PrimaryKPI: {
      Name: "Primary KPI",
      Values: [
        {Value: 10.4}
      ]
    }
  }

  return (
    <div className="carouselItemContainer">
      {mockData.Pages.map((page, i) => (
        <div className={`carouselItem hexagon${i + 1}`}>
          <Hexagon width={200} data={page} color={i % 2 ? "#00BCF1" : "#00B5AF"} />
          <div className={`lineAnimation animation${i + 1}`}></div>
        </div>
      ))}
      {/* {mockData.Pages.map((page, i) => (
        <div className={`carouselItem hexagon${i + 3}`}>
          <Hexagon width={200} data={page} color={i % 2 ? "#00BCF1" : "#00B5AF"} />
          <div className={`lineAnimation animation${i + 3}`}></div>
        </div>
      ))}
      {mockData.Pages.map((page, i) => (
        <div className={`carouselItem hexagon${i + 5}`}>
          <Hexagon width={200} data={page} color={i % 2 ? "#00BCF1" : "#00B5AF"} />
          <div className={`lineAnimation animation${i + 5}`}></div>
        </div>
      ))} */}
      
      <div className="carouselItem hexagon3">
        <Hexagon width={200} data={hexDataMock} color="#00B5AF"/>
      </div>
      <div className="carouselItem hexagon4">
        <Hexagon width={200} data={hexDataMock} color="#00B5AF"/>
      </div>
      <div className="carouselItem hexagon5">
        <Hexagon width={200} data={hexDataMock} color="#00BCF1"/>
      </div>
      <div className="carouselItem hexagon6">
        <Hexagon width={200} data={hexDataMock} color="#00BCF1"/>
      </div>
    </div>
  )
}