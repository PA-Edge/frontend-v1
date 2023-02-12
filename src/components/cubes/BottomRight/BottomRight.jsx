import React from "react"
import { Image } from "@mantine/core"
import '../cubes.scss'
import coloredCube from '../../images/cube_green_bright.svg'

export default function BottomRight() {
  return (
    <div className="smallCube bottomRight">
      <Image width={118} src={coloredCube} alt="BottomRightCube" />
    </div>
  )
}