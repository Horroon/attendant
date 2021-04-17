import React from "react";
import { connect } from "react-redux";
import { Adminscreen } from "./admin-screens";
import { UserScreen } from "./user-screens/index";

const MainScreen = (props) => {
  const { LoginInfo } = props;
  const role = "user"
  return role ==='user' ? <UserScreen /> : <Adminscreen />
};

const mapStateToProps = (store) => store;

export default connect(mapStateToProps)(MainScreen);
