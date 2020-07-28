import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Overview from './Overview/index.jsx'
import PinnedAssets from './PinnedAssets/index.jsx'
import UnAnnotatedAssets from './UnAnnotatedAssets/index.jsx'
import RecentActivities from './RecentActivities/index.jsx'

const useStyle = makeStyles({
  dashoard:{
  }
});

const Dashboard = () => {
  const classes = useStyle
  return (
    <Grid container className={classes.dashoard}>
      <Grid item xs={1}></Grid>
      <Grid item container xs={10} spacing={2}>
        <Grid item container xs={8} spacing={2}>
          <Grid item xs={6}> <Overview/></Grid>
          <Grid item xs={6}> <Overview/> </Grid>
          <Grid item xs={12}> <PinnedAssets/> </Grid>
          <Grid item xs={12}> <UnAnnotatedAssets/></Grid>
        </Grid>
        <Grid item xs={4}> <RecentActivities/></Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Dashboard;
