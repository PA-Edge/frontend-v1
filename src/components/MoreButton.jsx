import { Button } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom"
import { Image } from "@mantine/core"
import arrow from './images/small_arrow.svg'

export default function MoreButton(link) {
  return (
    <Link to={link.page}>
      <Button className={link.className}>
        <div>More</div>
        <Image className={link.arrow} width={10} src={arrow} alt="button arrow" />
      </Button>
    </Link>
  )
}