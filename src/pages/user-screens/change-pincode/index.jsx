import React, { useReducer } from "react";
import "./style.css";
import logo from "../../../assets/logo192.jpg";
import { connect } from "react-redux";
import { User } from "../../../constants/properties";
import { useToasts } from "react-toast-notifications";
import { Redirect, useHistory } from "react-router-dom";
import { MainPaths, subpaths } from "../../../paths";
import { EmployeeChangePinCode } from "../../../operations/index";
import { classes, ShowError } from "../../../utilities/index";

const Properties = {
  empId: "empId",
  empCode: "empCode",
  reEmpCode: "reEmpCode",
  fieldEmptyError: "fieldEmptyError",
  loader: "loader",
  errormessage:'errormessage'
};

const reducer = (state, action) => {
  switch (action.type) {
    case Properties.empId:
      return { ...state, empId: action.payload, fieldEmptyError: false };
    case Properties.empCode:
      return { ...state, empCode: action.payload, fieldEmptyError: false, errormessage:'' };
    case Properties.fieldEmptyError:
      return { ...state, fieldEmptyError: true };
    case Properties.reEmpCode:
      return { ...state, reEmpCode: action.payload, fieldEmptyError: false, errormessage:'' };
    case Properties.errormessage:
        return {...state, errormessage: action.payload}
    case Properties.loader:
      return { ...state, loader: action.payload };
    default:
      return state;
  }
};

const InitialState = {
  empId: "",
  empCode: "",
  reEmpCode: "",
  errormessage:'',
  fieldEmptyError: false,
  loader: false,
};

const ChangePinCode = (props) => {
  const { addToast } = useToasts();
  const {
    dispatch,
    LoginInfo: { role, info, isLoggedIn },
  } = props;
  const History = useHistory();
  const [state, setState] = useReducer(reducer, InitialState);

  const Changevalue = (e) => {
    const { name, value } = e.target;
    setState({ type: name, payload: value });
  };

  const Submit = async ()=>{
    try{
        const {empCode, reEmpCode} = state;
        if(empCode && reEmpCode){
            if(empCode === reEmpCode){
                if(reEmpCode.length > 0 && reEmpCode.length <= 4){
                    const loggedInUser = await EmployeeChangePinCode(info.empId, empCode, info.empCode);
                    if(loggedInUser?.data){
                        dispatch.LoginInfo.updateinfo({
                            role,
                            isLoggedIn: false,
                            info: {},
                          });
                        addToast("You have successfully changed pin code ", {appearance:'success'});
                        History.push(MainPaths.login)
                    }
                }else{
                    setState({type: Properties.errormessage, payload: 'pin code must be of 4 chars'})
                }
            }else{
                setState({type: Properties.errormessage, payload: 'pin code does not match'})
            }
        }else{
            setState({type: Properties.errormessage, payload:'Please enter values to all fields'})
        }
    }catch(e){
        ShowError(e, addToast);
    }
  }
  console.log("state ", props);
  return isLoggedIn ? (
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
                <h4 className="role">Change Pin Code</h4>
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
                  placeholder="New PIN Code"
                />
              </div>
              <div
                className={classes(
                  "input-group mb-3",
                  state.fieldEmptyError && !state.reEmpCode && "error"
                )}
              >
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name={Properties.reEmpCode}
                  className="form-control input_pass"
                  value={state.reEmpCode}
                  onChange={Changevalue}
                  placeholder="Confirm PIN Code"
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  type="button"
                  name="button"
                  className="btn btn-success btn-md btn-block"
                  disabled={state.loader}
                  onClick={()=>!state.loader && Submit()}
                >
                  {state.loader ? (
                    <i className="fas fa-spinner" />
                  ) : (
                    "Register new pin code"
                  )}
                </button>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <p className='error-message' >{state.errormessage}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ): <Redirect to={MainPaths.login} />;
};

const mapStateToProps = (store) => store;
export default connect(mapStateToProps)(ChangePinCode);
