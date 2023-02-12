import React from "react"
import { Image } from "@mantine/core"
import '../cubes.scss'
import coloredCube from '../../images/cube_teal.svg'

export default function TopRight() {
  return (
    <div className="smallCube topRight">
      <Image width={118} src={coloredCube} alt="TopRightCube" />
    </div>
  )
}