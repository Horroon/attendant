import React from "react";
import "./style.css";
import logo from '../../assets/logo192.jpg'
import { connect } from "react-redux";
import { store } from "../../models";
import {User} from '../../constants/properties'

const Login = (props) => {
  const {dispatch, LoginInfo:{role}} = props;
  const newRole = role === User.roles.user ? User.roles.admin : User.roles.user
 const changeRole = ()=>{
    store.dispatch.LoginInfo.updaterole(newRole)
 }
  return (
    <div className="container h-100 login-card-body">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img
                src={logo}
                className="brand_logo"
                alt="Logo"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form>
              <div className="d-flex justify-content-center">
                <h4 className="role">Punch Form</h4>
              </div>
              <div className="d-flex justify-content-center">
                <h6 className="role">{role} login</h6>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="empId"
                  className="form-control input_user"
                  value=""
                  placeholder="Employee ID"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name="pcode"
                  className="form-control input_pass"
                  value=""
                  placeholder="PIN Code"
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  type="button"
                  name="button"
                  className="btn btn-success btn-md btn-block"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              <button className="btn btn-sm btn-outline ml-2 role-btn" onClick={changeRole} >
                login as {newRole}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store=>store);
export default connect(mapStateToProps)(Login)