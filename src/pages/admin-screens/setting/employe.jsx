import React, { useEffect, useReducer } from "react";
import { useToasts } from "react-toast-notifications";
import { User } from "../../../constants/properties";
import { UpdateEmployee,DeleteEmployee } from "../../../operations";
import {FindAverageHours, FindOverallTimeHours, ShowError} from '../../../utilities/index';

const Properties = {
  fname: "fname",
  lname: "lname",
  avghrs: "avghrs",
  totalhrs: "totalhrs",
  updatewhole: "updatewhole",
  contentEditable: "enditable",
  updatebtn: "updatebtn",
};

const reducer = (state, action) => {
  switch (action.type) {
    case Properties.fname:
      return { ...state, fname: action.payload };
    case Properties.lname:
      return { ...state, lname: action.payload };
    case Properties.avghrs:
      return { ...state, avghrs: action.payload };
    case Properties.totalhrs:
      return { ...state, totalhrs: action.payload };
    case Properties.updatewhole:
      return { ...state, ...action.payload };
    case Properties.contentEditable:
      return { ...state, contentEditable: action.payload };
    case Properties.updatebtn:
      return { ...state, updatebtn: action.payload };
    default:
      return state;
  }
};

const InitialState = {
  fname: "",
  lname: "",
  avghrs: "",
  totalhrs: "",
  contentEditable: false,
  updatebtn: false,
};
export const EmployeeListItem = (props) => {
  const { styles, emp,dispatch } = props;
  const [state, setState] = useReducer(reducer, InitialState);
  const {addToast} = useToasts()

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({ type: name, payload: value });
    setState({type: Properties.updatebtn, payload: true})
  };

  const UpdateData = async()=>{
      try{
        const data = await UpdateEmployee(emp.empId, emp.empCode, state.fname, state.lname);
        if (data?.data) {
            dispatch.LoginInfo.updateinfo({
              role: User.roles.admin,
              isLoggedIn: true,
              info: data.data,
            });
            addToast("Record updated successfully", {
              appearance: "success",
              autoDismiss: true,
            });
          }
      }catch(e){
          ShowError(e,addToast)
      }
  }

  const DeleteEmployeeMethod = async()=>{
    try{
        const data = await DeleteEmployee(emp.empId);
        if (data?.data) {
            dispatch.LoginInfo.updateinfo({
              role: User.roles.admin,
              isLoggedIn: true,
              info: data.data,
            });
            addToast("user successfully deleted", {
              appearance: "success",
              autoDismiss: true,
            });
          }
      }catch(e){
          ShowError(e,addToast)
      }
  };

  useEffect(() => {
    setState({
      type: Properties.updatewhole,
      payload: { fname: emp.firstname, lname: emp.lastname },
    });
  }, [emp]);
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-around">
        <div>
          <input
            className="editable-field"
            name={Properties.fname}
            disabled={!state.contentEditable}
            value={state.fname}
            onChange={ChangeHandler}
          />
        </div>
        <div>
          <input
            className="editable-field"
            name={Properties.lname}
            disabled={!state.contentEditable}
            value={state.lname}
            onChange={ChangeHandler}
          />
        </div>
        <div>{FindAverageHours(emp.attendances)} avg hours</div>
        <div>{FindOverallTimeHours(emp.attendances)} total hours</div>
        <div className={styles.actiondiv}>
          <div>
            {!state.contentEditable ? <i className="fas fa-edit"  onClick={()=>setState({type: Properties.contentEditable, payload: true})}/> : <button className="btn btn-sm btn-success" disabled={!state.updatebtn} onClick={UpdateData}>Update</button>}
          </div>{" "}
          <div>
            <i className="fas fa-trash" onClick={DeleteEmployeeMethod} />
          </div>{" "}
        </div>
      </div>
    </li>
  );
};
