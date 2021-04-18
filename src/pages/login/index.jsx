import React from "react";
import "./style.css";
import logo from '../../assets/logo192.jpg'

export const Login = ({}) => {
  debugger;
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
                <h4 className="role">Punch Login</h4>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name=""
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
                  name=""
                  className="form-control input_pass"
                  value=""
                  placeholder="PIN Code"
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  type="button"
                  name="button"
                  className="btn btn-success btn-sm btn-block"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              <a href="#" className="ml-2 role-btn">
                login as admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
