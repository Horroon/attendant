import React from "react";
import MainScreen from "../pages/main";
import { Login } from "../pages/login/index";
import {MainPaths} from '../paths/index';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainRoutes = ({}) => {
  debugger;
  return (
    <Router>
      <Switch>
        <Router exact path={MainPaths.login}>
          <Login />
        </Router>
        <Route path={MainPaths.appPath}>
          <MainScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRoutes;
