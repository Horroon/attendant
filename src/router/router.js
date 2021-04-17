import React from "react";
import MainScreen from "../pages/main";
import {Login} from "../pages/login/index";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainRoutes = ({}) => {
    debugger
  return (
    <Router>
      <Switch>
        <Route exact path="/attendant">
            <MainScreen />
        </Route>
        <Router exact path="/attendant/login">
            <Login />
        </Router>
      </Switch>
    </Router>
  );
};

export default MainRoutes