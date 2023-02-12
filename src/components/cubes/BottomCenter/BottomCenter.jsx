import React from "react"
import { Image } from "@mantine/core"
import '../cubes.scss'
import coloredCube from '../../images/cube_orange.svg'

export default function BottomCenter() {
  return (
    <div className="smallCube bottomCenter">
      <Image width={118} src={coloredCube} alt="BottomCenterCube" />
    </div>
  )
}