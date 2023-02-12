import React from "react";
import { Image } from "@mantine/core"
import panel from '../images/image005.png'
import MoreButton from "../MoreButton";

export default function TopPanel(panelStyle) {
  return (
    <div className={panelStyle.css}>
      <Image width={366} src={panel} alt="TopPanel" />
      <div className="panelText topPanelText">Damage Ratio Insights</div>
      <MoreButton page='/damage-ratio-insights' className='topPanelButton' arrow='buttonArrowTop'/>
    </div>
  )
}