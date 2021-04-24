import React from "react";
import { connect } from "react-redux";
import Adminscreen from "./admin-screens";
import { UserScreen } from "./user-screens/index";
import RegisterPinCode from './user-screens/change-pincode/index';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { MainPaths, subpaths } from "../paths";
import styles from './style.module.scss';
import Login from './login/index';

const MainScreen = (props) => {
  const { LoginInfo } = props;
  const {role} = LoginInfo
  return (
    <div className={styles.mainbody}>
      <Router>
        <Switch>
          <Route exact path="/" render={()=><Redirect to={MainPaths.login} />} />
          <Route exact path={subpaths.adminpaths.main}>
            <Adminscreen />
          </Route>
          <Route exact path={subpaths.userpaths.main}>
            <UserScreen role={role} />
          </Route>
          <Route exact path={subpaths.newpin.main}>
            <RegisterPinCode />
          </Route>
          <Route exact path={MainPaths.login} >
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (store) => store;

export default connect(mapStateToProps)(MainScreen);
