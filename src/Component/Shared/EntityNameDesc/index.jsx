import React from "react";
import { makeStyles, ListItem, ListItemText } from "@material-ui/core";
import Aux from "../../../Hoc/aux";

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: "white",
    backgroundColor: "rgb(22, 164, 216)",
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "20px",
  },
  primaryText: {
    fontSize: 24,
    fontWeight: "bold",
  },
}));

const EntityNameDesc = (props) => {
  const classes = useStyles();
  const primaryTextProps = {
    fontSize: 14,
    fontWeight: "bold",
  };
  const secondryTextProps = {
    fontSize: 12,
    color: "rgb(124, 124, 124)",
  };
  return (
    <Aux>
      <ListItem>
        <ListItemText
          primary={props.name}
          secondary={props.desc}
          primaryTypographyProps={{
            color: "secondary",
            style: primaryTextProps,
          }}
          secondaryTypographyProps={{
            style: secondryTextProps
          }}
        />
      </ListItem>
    </Aux>
  );
};

export default EntityNameDesc;
