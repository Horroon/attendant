import React from "react";
import { connect } from "react-redux";
import { Adminscreen } from "./admin-screens";
import { UserScreen } from "./user-screens/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { subpaths } from "../paths";

const MainScreen = (props) => {
  const { LoginInfo } = props;
  const role = "user";
  debugger;
  return (
    <Router>
      <Switch>
        <Route exact path={subpaths.adminpaths.main}>
          <Adminscreen role={role} />
        </Route>
        <Route exact path={subpaths.userpaths.main}>
          <UserScreen role={role} />
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (store) => store;

export default connect(mapStateToProps)(MainScreen);
