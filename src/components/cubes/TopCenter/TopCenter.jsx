import React from "react"
import { Image } from "@mantine/core"
import '../cubes.scss'
import coloredCube from '../../images/cube_red.svg'

export default function TopCenter() {
  return (
    <div className="smallCube topCenter">
      <Image width={118} src={coloredCube} alt="TopCenterCube" />
    </div>
  )
}