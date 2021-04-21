import React, { useReducer } from "react";
import "./style.css";
import logo from "../../assets/logo192.jpg";
import { connect } from "react-redux";
import { store } from "../../models";
import { User } from "../../constants/properties";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { subpaths } from "../../paths";
import { EmployeeLogin } from "../../operations/index";
import { classes } from "../../utilities/build-css-class";

const Properties = {
  empId: "empId",
  empCode: "empCode",
  fieldEmptyError: "fieldEmptyError",
  loader: "loader",
};

const reducer = (state, action) => {
  switch (action.type) {
    case Properties.empId:
      return { ...state, empId: action.payload, fieldEmptyError: false };
    case Properties.empCode:
      return { ...state, empCode: action.payload, fieldEmptyError: false };
    case Properties.fieldEmptyError:
      return { ...state, fieldEmptyError: true };
    case Properties.loader:
      return { ...state, loader: action.payload };
    default:
      return state;
  }
};

const InitialState = {
  empId: "",
  empCode: "",
  fieldEmptyError: false,
  loader: false,
};

const Login = (props) => {
  const { addToast } = useToasts();
  const {
    dispatch,
    LoginInfo: { role },
  } = props;
  const History = useHistory();
  const [state, setState] = useReducer(reducer, InitialState);

  const newRole = role === User.roles.user ? User.roles.admin : User.roles.user;
  const changeRole = () => {
    store.dispatch.LoginInfo.updaterole(newRole);
  };

  const UserLogin = async (empId, empCode) => {
    try {
      const user = await EmployeeLogin(empId, empCode);
      if (user?.data) {
        store.dispatch.LoginInfo.updateinfo({role, isLoggedIn: true, info: user.data})
        History.push(subpaths.userpaths.main);
        addToast("Successfully logged in", {
          appearance: "success",
          autoDismiss: true,
        });
      }
    } catch (error) {
      if (error.response) {
        addToast(error.response.data.error, { appearance: "error" });
      } else {
        addToast("Something went wrong", { appearance: "error" });
      }
    } finally {
      setState({ type: Properties.loader, payload: false });
    }
  };

  const Changevalue = (e) => {
    const { name, value } = e.target;
    setState({ type: name, payload: value });
  };
  const login = () => {
    const { empId, empCode } = state;
    if (empId && empCode) {
      setState({ type: Properties.loader, payload: true });
      role === User.roles.user && UserLogin(empId, empCode);
    } else {
      setState({ type: Properties.fieldEmptyError });
      debugger;
    }
  };

  console.log("state ", state);
  return (
    <div className="container h-100 login-card-body">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img src={logo} className="brand_logo" alt="Logo" />
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
              <div
                className={classes(
                  "input-group mb-3",
                  state.fieldEmptyError && !state.empId && "error"
                )}
              >
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name={Properties.empId}
                  className={classes("form-control input_user")}
                  value={state.empId}
                  onChange={Changevalue}
                  placeholder="Employee ID"
                />
              </div>
              <div
                className={classes(
                  "input-group mb-3",
                  state.fieldEmptyError && !state.empCode && "error"
                )}
              >
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name={Properties.empCode}
                  className="form-control input_pass"
                  value={state.empCode}
                  onChange={Changevalue}
                  placeholder="PIN Code"
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  type="button"
                  name="button"
                  className="btn btn-success btn-md btn-block"
                  onClick={login}
                  disabled={state.loader}
                >
                  {state.loader ? <i className="fas fa-spinner" /> : "Login"}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              <button
                className="btn btn-sm btn-outline ml-2 role-btn"
                onClick={changeRole}
              >
                login as {newRole}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => store;
export default connect(mapStateToProps)(Login);
