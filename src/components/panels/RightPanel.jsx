import React from "react";
import { Image } from "@mantine/core"
import panel from '../images/image006.png'
import MoreButton from "../MoreButton";

export default function RightPanel(panelStyle) {
  return (
    <div className={panelStyle.css}>
      <Image width={366} src={panel} alt="RightPanel" />
      <div className="panelText rightPanelText">Locator At-Fault Ratio</div>
      <MoreButton page='/locator-at-fault-ratio' className='rightPanelButton' arrow='buttonArrowRight'/>
    </div>
  )
}

