import React, { useEffect, useReducer, useState } from "react";
import { TodayAvailability } from "./today-availability/index";
import AdminSideNav from "./sidenav/index";
import { Adminpages, User } from "../../constants/properties";
import styles from "./style.module.scss";
import { connect } from "react-redux";
import OverAllStats from "./overallstats/index";
import Setting from "./setting/index";
import { Redirect } from "react-router";
import { MainPaths } from "../../paths";

const Records = [
  {
    firstName: "Ali",
    lastName: "Hamza",
    dept: "IT",
    role: "Software Engineer",
    status: "Available",
  },
  {
    firstName: "Waqas",
    lastName: "Ahmed",
    dept: "IT",
    role: "Software Engineer",
    status: "Available",
  },
  {
    firstName: "Tanweer",
    lastName: "Ali",
    dept: "Account",
    role: "Account Manager",
    status: "Available",
  },
  {
    firstName: "Hammas",
    lastName: "Akbar",
    dept: "Sale",
    role: "Sale Executive",
    status: "Available",
  },
];

const Properties = {
  records:'RECORDS',
  title:'TITLE'
};

const InitialState = {
  records: Records,
  title:''
}
const reducer = (state,action)=>{
  switch(action.type){
    case Properties.records:
      return {...state, records: action.payload};
    case Properties.title:
      return {...state, title: action.payload}
    default:
      return {...state}
  }
}

const Adminscreen = (props) => {
  const [title, setTitle] = useState("");
  const [state, setState] = useReducer(reducer, InitialState);
  const {
    LoginInfo,
    Admin: { currentpageId },
  } = props;

  const {role,info:{employees}} = LoginInfo;

  const FilterRecords = (status)=>{
    const newrecords = employees.filter(emp=>(emp.status).toUpperCase() === (status).toUpperCase());
    setState({type: Properties.records, payload: newrecords});
    setState({type: Properties.title, payload: status})
  }
  
  useEffect(() => {
    if(LoginInfo.isLoggedIn){
      currentpageId === Adminpages.availability.subpages.availables.id && FilterRecords(User.status.available)
      currentpageId === Adminpages.availability.subpages.unavailables.id && FilterRecords(User.status.unavailable)
      currentpageId === Adminpages.availability.subpages.onleaves.id && FilterRecords(User.status.leave) 
    }
  }, [currentpageId]);
  console.log("props ", props);
  return (
    role === User.roles.admin ? (
      <div className={styles.admincontainer}>
        <AdminSideNav />
        <div className={styles.adminbody}>
          {currentpageId.includes(Adminpages.availability.id) && (
            <TodayAvailability records={state.records} title={state.title} />
          )}
          {currentpageId.includes(Adminpages.overallstats.id) && (
            <OverAllStats employees = {employees} />
          )}
          {currentpageId.includes(Adminpages.setting.id) && <Setting />}
        </div>
      </div>
    ):<Redirect to={MainPaths.login} />
  );
};

const mapStateToProps = (store) => store;

export default connect(mapStateToProps)(Adminscreen);
