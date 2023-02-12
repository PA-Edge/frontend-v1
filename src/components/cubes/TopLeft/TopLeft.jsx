import React from "react"
import { Image } from "@mantine/core"
import '../cubes.scss'
import coloredCube from '../../images/cube_green_bright.svg'

export default function TopLeft() {
  return (
    <div className="smallCube topLeft">
      <Image width={118} src={coloredCube} alt="TopLeftCube" />
    </div>
  )
}