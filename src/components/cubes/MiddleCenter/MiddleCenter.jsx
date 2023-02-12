import React from "react"
import { Image } from "@mantine/core"
import '../cubes.scss'
import coloredCube from '../../images/cube_blue.svg'

export default function MiddleCenter() {
  return (
    <div className="smallCube middleCenter">
      <Image width={118} src={coloredCube} alt="MiddleCenterCube" />
    </div>
  )
}