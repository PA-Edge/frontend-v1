import React from "react";
import { Image } from "@mantine/core"
import panel from '../images/image003.png'
import MoreButton from "../MoreButton";

export default function LeftPanel(panelStyle) {
  return (
    <div className={panelStyle.css}>
      <Image width={366} src={panel} alt="LeftPanel" />
      <div className="panelText leftPanelText">Damage Ratio</div>
      <MoreButton page='/damage-ratio' className='leftPanelButton' arrow='buttonArrowLeft'/>
    </div>
  )
}