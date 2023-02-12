/* eslint-disable */

import React, { useReducer, useEffect, useRef } from "react"
import { Text, Container, Image, Center } from "@mantine/core"
import Cube from "./Cube"
import Honeycomb from "./Honeycomb"
import CarouselItem from "./CarouselItem"
import carouselDotsOn from "./images/carousel_assets_v0_1/carousel_dot_on.svg"
import carouselDots from "./images/carousel_assets_v0_1/carousel_dot_off.svg"
import carouselNext from "./images/carousel_assets_v0_1/carousel_next_arrow.svg"
import carouselPrev from "./images/carousel_assets_v0_1/carousel_prev_arrow.svg"
import './cubes/cubes.scss'
// import { useSelector, useDispatch } from "react-redux"
// import { setLeaksData, setEmissionsData } from "./hooks/reduxStateSlice"

export default function Home() {

  return (
    <>
      <div className="dotsContainer">
        <img src={carouselDotsOn} width={20} className="carouselDots"></img>
        <img src={carouselDots} width={20} className="carouselDots"></img>
        <img src={carouselDots} width={20} className="carouselDots"></img>
        <img src={carouselDots} width={20} className="carouselDots"></img>
      </div>
      <img src={carouselPrev} width={30} className="carouselPrev"></img>
      <img src={carouselNext} width={30} className="carouselNext"></img>

      <div className="home">
        <div className="homescreenBackground"></div>
        <div className="homescreenBackgroundRainbow"></div>
        <CarouselItem />
        <Cube />
        {/* <Honeycomb /> */}
      </div>
    </>
  )
}
