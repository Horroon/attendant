import React, { useEffect, useReducer } from "react";
import { Search } from "../../search/index";
import styles from "./style.module.scss";
import { NewEmployee } from "./addnewemployee";
import {EmployeeListItem} from './employe';
import { connect } from "react-redux";
import {OfficeHours} from './office-hours';

const Properties = {
  addemp: "NewEmployee",
  records:"Records"
};

const reducer = (state, action) => {
  switch (action.type) {
    case Properties.addemp:
      return { ...state, addemp: action.payload };
    case Properties.records:
      return {...state, records: action.payload};
    default:
      return state;
  }
};

const InitialState = {
  addemp: false,
  records: []
};
const Setting = (props) => {
  const {LoginInfo} = props;
  const {info} = LoginInfo
  const [state, setState] = useReducer(reducer, InitialState);

  useEffect(()=>{
    setState({type: Properties.records, payload: info.employees})
  },[info.employees])
  console.log('props ', props)
  return (
    <div className={styles.statscontainer}>
      <div className={styles.searchcontainer}>
        <Search placeholder="Search employee e.g Adnan" />
      </div>
      <div className={styles.body}>
        <div className={styles.listcontainer}>

        <OfficeHours info={info} />
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
            {state.records.map((emp) => (
              <EmployeeListItem emp={emp} styles={styles} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store=>store);

export default connect(mapStateToProps)(Setting);
