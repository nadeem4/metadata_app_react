import React from "react";
import {
  makeStyles,
  Divider,
  Avatar,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import Aux from "../../../Hoc/aux";

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: "white",
    backgroundColor: "rgb(22, 164, 216)",
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "20px",
  },
}));

const getInitials = (name) => {
  const nameArr = name.split(" ");
  return nameArr[0][0] + nameArr[1][0];
};

const UserInfo = (props) => {
  const classes = useStyles();
  const primaryTextProps = {
    fontSize: 14,
    fontWeight: props.isBold ? 'bold' : 'normal',
  };
  const secondryTextProps = {
    fontSize: 12,
    color: 'rgb(124, 124, 124)'
  };
  return (
    <Aux>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>{getInitials(props.name)}</Avatar>
        </ListItemAvatar>
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

export default UserInfo;
