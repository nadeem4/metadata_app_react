import React from "react";
import { Grid, Typography, makeStyles, FormControl } from "@material-ui/core";
import BackgroundImage from "../../../assets/images/bg.png";
import SearchInput from "./SearchInput/index.jsx";
import RadioButtonGroup from "./RadioButtonGroup/index.jsx";
import SearchButtonGroup from "./SearchButtonGroup/index.jsx";

const useStyle = makeStyles((theme) => ({
  box: {
    backgroundImage: `url(${BackgroundImage})`,
    padding: "40px 40px 100px 40px",
    color: "#ffffff",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bolder",
    marginBottom: "10px",
  },
  desc: {
    width: "70%",
    fontSize: "16px",
    fontWeight: "normal",
  },
  formControl: {
    width: "80%",
    marginTop:"20px"
  },
}));

const Common = (props) => {
  const classes = useStyle();

  return (
    <Grid container className={classes.box}>
      <Grid item xs={6}>
        <Typography className={classes.title}>
          {" "}
          Welocome to Metadata Editor{" "}
        </Typography>
        <Typography className={classes.desc}>
          {" "}
          Short Descripttion Ut pariatur proident non commodo sunt id. Non
          proident exercitation commodo elit. Non proident exercitation commodo
          elit
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl component="fieldset" className={classes.formControl}>
          <Grid container >
            <Grid item xs={12}>
              <SearchInput />
            </Grid>
            <Grid item xs={6}>
              <RadioButtonGroup />
            </Grid>
            <Grid item  xs={6}>
              <SearchButtonGroup />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Common;
