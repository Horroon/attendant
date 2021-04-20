import React, { useReducer } from "react";
import { Search } from "../../search/index";
import styles from "./style.module.scss";
import { NewEmployee } from "./addnewemployee";

const Properties = {
  addemp: "NewEmployee",
};

const reducer = (state, action) => {
  switch (action.type) {
    case Properties.addemp:
      return { ...state, addemp: action.payload };
    default:
      return state;
  }
};

const InitialState = {
  addemp: false,
};
const Setting = () => {
  const [state, setState] = useReducer(reducer, InitialState);
  return (
    <div className={styles.statscontainer}>
      <div className={styles.searchcontainer}>
        <Search placeholder="Search employee e.g Adnan" />
      </div>
      <div className={styles.body}>
        <div className={styles.listcontainer}>
          <div className={styles.actioncontainer}>
            <div className={styles.buttoncontainer}>
              {!state.addemp ? (
                <button className="btn btn-success btn-sm btn-block" onClick={()=>setState({type: Properties.addemp, payload: true})}>
                  Add New Employee
                </button> 
              ): <button className="btn btn-secondary btn-sm btn-block" onClick={()=>setState({type: Properties.addemp, payload: false})}>close form</button>}
            </div>
          </div>
          <div>
            <NewEmployee shouldIShow={state.addemp} />
          </div>
          <ul id="sortable" className="list-group">
            {[1, 2, 3, 4, 5].map((emp) => (
              <li className="list-group-item">
                <div className="d-flex justify-content-around">
                  <div>Firstname</div>
                  <div>Lastname</div>
                  <div>Ave Working Hours</div>
                  <div>Total Working hours</div>
                  <div className={styles.actiondiv}>
                    <div>
                      <i className="fas fa-edit" />
                    </div>{" "}
                    <div>
                      <i className="fas fa-trash" />
                    </div>{" "}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Setting;
