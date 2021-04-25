import React, { useReducer } from "react";
import { useToasts } from "react-toast-notifications";
import { Departments, User } from "../../../constants/properties";
import { store } from "../../../models";
import { AddNewEmployee } from "../../../operations";
import { GenerateId, ShowError } from "../../../utilities";

const Properties = {
  fname: "fname",
  lname: "lname",
  email: "email",
  role: "role",
  department: "dept",
  empId: "empId",
  empCode: "empCode",
};

const InitialState = {
  fname: "",
  lname: "",
  email: "",
  role: "",
  department: "",
  empId: "",
  empCode: "0000",
};
const reducer = (state, action) => {
  switch (action.type) {
    case Properties.fname:
      return { ...state, fname: action.payload };
    case Properties.lname:
      return { ...state, lname: action.payload };
    case Properties.department:
      return { ...state, department: action.payload };
    case Properties.email:
      return { ...state, email: action.payload };
      case Properties.role:
        return { ...state, role: action.payload };
    case Properties.empId:
      return { ...state, empId: action.payload };
    case Properties.empCode:
      return { ...state, empCode: action.payload };
    default:
      return state;
  }
};
export const NewEmployee = ({ shouldIShow }) => {
  const [state, setState] = useReducer(reducer, InitialState);
  const { addToast } = useToasts();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setState({ type: name, payload: value });
    if (name === Properties.department) {
      const newEmpId = (value && GenerateId(value)) || "";
      setState({ type: Properties.empId, payload: newEmpId });
    }
  };

  const submitData = async () => {
    const { empId, empCode, fname, lname, department, role, email } = state;
    if (empId && empCode && fname && lname && department && role && email) {
      try {
        let data = await AddNewEmployee(empId, empCode,fname,lname,role,email,department);
        if (data?.data) {
          store.dispatch.LoginInfo.updateinfo({
            role: User.roles.admin,
            isLoggedIn: true,
            info: data.data,
          });
          addToast("Record successfully added", {
            appearance: "success",
            autoDismiss: true,
          });
        }
      } catch (error) {
        ShowError(error, addToast);
      } finally {
        //setState({ type: Properties.loader, payload: false });
      }
    } else {
      addToast("Please enter values in all enable fields", {
        appearance: "error",
      });
    }
  };
  return (
    shouldIShow && (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Emp ID: </label>
              <input
                type="text"
                name={Properties.empId}
                class="form-control"
                aria-describedby="empId"
                value={state.empId}
                placeholder=""
                disabled
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Emp Code: </label>
              <input
                type="text"
                name={Properties.empCode}
                class="form-control"
                aria-describedby="firstname"
                placeholder=""
                value={state.empCode}
                disabled
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div class="form-group">
              <label>First Name: </label>
              <input
                type="text"
                name={Properties.fname}
                class="form-control"
                aria-describedby="firstname"
                placeholder="Enter First Name"
                onChange={HandleChange}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Last Name</label>
              <input
                type="text"
                name={Properties.lname}
                class="form-control"
                placeholder="Last Name"
                onChange={HandleChange}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div class="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                name={Properties.email}
                class="form-control"
                placeholder="Last Name"
                onChange={HandleChange}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div class="form-group">
              <label for="exampleInputPassword1">Role</label>
              <input
                type="text"
                name={Properties.role}
                class="form-control"
                placeholder="Enter Role"
                onChange={HandleChange}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div class="form-group">
              <label for="exampleInputPassword1">Department</label>
              <select
                name={Properties.department}
                value={state.department}
                onChange={HandleChange}
                className="form-control"
                placeholder="Select department"
              >
                <option value="">Select department</option>
                {Departments.map((dept, index) => (
                  <option value={dept} key={index + dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div class="form-group">
              <button className="btn btn-success btn-md" onClick={submitData}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
