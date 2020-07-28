import React from "react";
import { Icon } from "@material-ui/core";

const CustomIcon = (props) => (
  <Icon>
    <img src={props.iconSrc} alt={props.iconAlt} style ={ {marginRight: "10px"}} />
  </Icon>
);

export default CustomIcon