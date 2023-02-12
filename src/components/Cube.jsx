import React, { useState } from "react";
import { Image } from "@mantine/core"
import './cubes/cubes.scss'
import BottomCenter from "./cubes/BottomCenter/BottomCenter";
import MiddleCenter from "./cubes/MiddleCenter/MiddleCenter";
import TopCenter from "./cubes/TopCenter/TopCenter";
import BottomLeft from "./cubes/BottomLeft/BottomLeft";
import TopLeft from "./cubes/TopLeft/TopLeft";
import BottomRight from "./cubes/BottomRight/BottomRight";
import TopRight from "./cubes/TopRight/TopRight";
import plusArrowLeft from './images/plus_arrow_left.svg'
import plusArrowTop from './images/plus_arrow_top.svg'
import plusArrowRight from './images/plus_arrow_right.svg'
import RightPanel from "./panels/RightPanel";
import LeftPanel from "./panels/LeftPanel";
import TopPanel from "./panels/TopPanel";
import HexBackground from './images/HexMeshDefault.png';
import coloredCube from './images/cube_blue.svg';
import EDGELogo from './images/EDGE_logo-cropped.png';

export default function Cube() {
  const [rightPanelStyle, setRightPanelStyle] = useState('rightPanel')
  const [leftPanelStyle, setLeftPanelStyle] = useState('leftPanel')
  const [topPanelStyle, setTopPanelStyle] = useState('topPanel')

  const openRightPanel = (event) => {
    setRightPanelStyle('rightPanel-open')
    event.target.style = ('display: none')
  }

  const openLeftPanel = (event) => {
    setLeftPanelStyle('leftPanel-open')
    event.target.style = ('display: none')
  }

  const openTopPanel = (event) => {
    setTopPanelStyle('topPanel-open')
    event.target.style = ('display: none')
  }

  return (
    <div className="cubeContainer">
      <BottomCenter />
      <MiddleCenter />
      <div className="logoHexagon">
        <Image className="hexagon" src={coloredCube} alt="EDGE logo hexagon" />
        <Image className="cubeLogo" src={EDGELogo} alt="EDGE logo" />
        <span className="hexText">PERFORMANCE</span>
      </div>
      {/* <div className="hex1">
        <Image className="hexagon" src={coloredCube} alt="EDGE logo hexagon" />
      </div>
      <div className="hex2">
        <Image className="hexagon" src={coloredCube} alt="EDGE logo hexagon" />
      </div>
      <div className="hex3">
        <Image className="hexagon" src={coloredCube} alt="EDGE logo hexagon" />
      </div>
      <div className="hex4">
        <Image className="hexagon" src={coloredCube} alt="EDGE logo hexagon" />
      </div>
      <div className="hex5">
        <Image className="hexagon" src={coloredCube} alt="EDGE logo hexagon" />
      </div>
      <div className="hex6">
        <Image className="hexagon" src={coloredCube} alt="EDGE logo hexagon" />
      </div> */}
      <TopCenter />
      <BottomLeft />
      <TopLeft />
      <BottomRight />
      <TopRight />
      {/* <Image className="arrow plusArrowRight" width={42} src={plusArrowRight} alt="PlusArrowRight" onClick={openRightPanel} /> */}
      {/* <Image className="arrow plusArrowLeft" width={42} src={plusArrowLeft} alt="PlusArrowLeft" onClick={openLeftPanel} /> */}
      {/* <Image className="arrow plusArrowTop" width={60} src={plusArrowTop} alt="PlusArrowTop" onClick={openTopPanel} /> */}
      {/* <RightPanel css={rightPanelStyle} />
      <LeftPanel css={leftPanelStyle} />
      <TopPanel css={topPanelStyle} /> */}
    </div>
  )
}