import React from "react";
import Header from "./Header/index.jsx";
import { Typography, Box, makeStyles } from "@material-ui/core";
import Aux from "../../Hoc/aux";
import Common from "./Common/index.jsx";
import Dashboard from "./Dashboard/index.jsx";
import DatasetManagment from './DatasetManagement/index.jsx'
import { BrowserRouter, Route } from 'react-router-dom'

const useStyle = makeStyles({});

const Layout = () => {
  return (
    <Aux>
      <Header />
      <BrowserRouter>
      <Box>
        <Common></Common>
      </Box>
      <Box>
        <Route exact path="/" component={Dashboard} ></Route>
        <Route exact path="/Datasets" component={DatasetManagment} ></Route>

        <Route exact path="/Tags" component={DatasetManagment} ></Route>
        <Route exact path="/Log" component={Dashboard} ></Route>
      </Box>
      </BrowserRouter>
     
    </Aux>
  );
};

export default Layout;
