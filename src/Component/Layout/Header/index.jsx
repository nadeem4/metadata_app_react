import React from "react";
import { AppBar, Toolbar, Typography, Divider, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./Navigation/index.jsx";
import UserInfo from "../../Shared/UserInfo/index.jsx";
import LogOutIcon from "../../../assets/images/icon-logout.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: 0,
    backgroundColor: "#ffffff",
  },
  appNameBox: {
    display: "flex",
    alignItems: "stretch",
    width: "18%",
    justifyContent: "center",
  },
  navBox: {
    display: "flex",
    alignItems: "stretch",
    width: "60%",
    justifyContent: "flex-start",
  },
  userBox: {
    display: "flex",
    width: "13%",
    justifyContent:"flex-end"
  },
  appName: {
    fontSize: "20px",
    fontFamily: "ProximaNova",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    width: "100%",
  },
  user: {
    fontSize: "14px",
    fontFamily: "ProximaNova",
    color: "#000000",
    fontWeight: "bold",
  },
  superAdmin: {
    fontSize: "10px",
    fontFamily: "ProximaNova",
    color: "#000000",
    fontWeight: "light",
  },
  divider: {
    height: "40px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar disableGutters={true}>
        <Box className={classes.appNameBox}>
          <Typography className={classes.appName} color="primary">
            Metadata Editor
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          className={classes.divider}
        />
        <Box className={classes.navBox}>
          <Navigation />
        </Box>
        <Box className={classes.userBox}>
          <UserInfo name="James Smith" desc="Super Admin" isBold="true" />
        </Box>
        <Divider
            variant="middle"
            orientation="vertical"
            className={classes.divider}
          />

          <img src={LogOutIcon} alt="logout_icon" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
