import React, { useEffect, useState } from "react";
import { TodayAvailability } from "./today-availability/index";
import AdminSideNav from "./sidenav/index";
import { Adminpages, User } from "../../constants/properties";
import styles from "./style.module.scss";
import { connect } from "react-redux";
import OverAllStats from "./overallstats/index";
import Setting from "./setting/index";

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

const Adminscreen = (props) => {
  const [title, setTitle] = useState("");
  const {
    LoginInfo: { role },
    Admin: { currentpageId },
  } = props;

  useEffect(() => {
    currentpageId === Adminpages.availability.subpages.availables.id &&
      setTitle(Adminpages.availability.subpages.availables.name);
    currentpageId === Adminpages.availability.subpages.unavailables.id &&
      setTitle(Adminpages.availability.subpages.unavailables.name);
    currentpageId === Adminpages.availability.subpages.onleaves.id &&
      setTitle(Adminpages.availability.subpages.onleaves.name);
  }, [currentpageId]);
  console.log("props ", props);
  return (
    role === User.roles.admin && (
      <div className={styles.admincontainer}>
        <AdminSideNav />
        <div className={styles.adminbody}>
          {currentpageId.includes(Adminpages.availability.id) && (
            <TodayAvailability records={Records} title={title} />
          )}
          {currentpageId.includes(Adminpages.overallstats.id) && (
            <OverAllStats />
          )}
          {currentpageId.includes(Adminpages.setting.id) && <Setting />}
        </div>
      </div>
    )
  );
};

const mapStateToProps = (store) => store;

export default connect(mapStateToProps)(Adminscreen);
