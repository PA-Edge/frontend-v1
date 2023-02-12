import { Group, Image } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import SCGlogo from "./images/SCG_logo.svg";

import './footer.css'

export default function Footer(props) {
  return (
    <Group className="footer">
      <Image className="footerLogo" width={172} src={SCGlogo} alt="SCG" />
      <a href='http://gaxgpif605xs.southernco.com:9085/ldmcatalog/login' target="_blank">EDGE Data Catalog</a>
      |
      <a href='https://coolcompliance.southernco.com/' target="_blank">Cool Compliance</a>
      |
      <a href='https://itservices.southernco.com/dwp/app/#/catalog' target="_blank">Technology Self Service</a>
      |
      <a href='https://forms.office.com/pages/responsepage.aspx?id=LS6gwIYRCkGIlQpKJS6_F_EJB3h1dnxLs1hzTi4sZt9UQUVRNFFTUzExV09QSEMzNVI0UTZHMUtXVyQlQCN0PWcu' target="_blank">EDGE Request Form</a>
      |
      <a href='https://soco365.sharepoint.com/sites/Pipeline365/SitePages/Who-we-are.aspx' target="_blank">Pipeline 365</a>
    </Group>

  )
}