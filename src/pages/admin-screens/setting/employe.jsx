import React, { useEffect, useReducer } from "react";
import {FindAverageHours, FindOverallTimeHours} from '../../../utilities/index';

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
  const { styles, emp } = props;
  const [state, setState] = useReducer(reducer, InitialState);

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    debugger;
    setState({ type: name, payload: value });
  };

  useEffect(() => {
    setState({
      type: Properties.updatewhole,
      payload: { fname: emp.firstname, lname: emp.lastname },
    });
  }, []);
  debugger;
  console.log("state ", state);
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
          <div onClick={()=>setState({type: Properties.contentEditable, payload: true})}>
            <i className="fas fa-edit" />
          </div>{" "}
          <div>
            <i className="fas fa-trash" />
          </div>{" "}
        </div>
      </div>
    </li>
  );
};
