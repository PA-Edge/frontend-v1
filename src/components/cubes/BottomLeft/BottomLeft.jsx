import React from "react"
import { Image } from "@mantine/core"
import '../cubes.scss'
import coloredCube from '../../images/cube_teal.svg'

export default function BottomLeft() {
  return (
    <div className="smallCube bottomLeft">
      <Image width={118} src={coloredCube} alt="BottomLeftCube" />
    </div>
  )
}