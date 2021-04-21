import React from "react";
import styles from "./style.module.scss";
import { Avatar } from "../../avatar/index";
import { MakeInitials } from "../../../utilities/build-initials";
import { classes } from "../../../utilities/build-css-class";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { MainPaths } from "../../../paths";

const UserCard = (props) => {
  const {info, isLoggedIn} = props;
  console.log('props ', props);
  
  return isLoggedIn ? (
    <div className={styles.cardcontainer}>
      <div className={classes("card w-50 m-auto", styles.card)}>
        <div className={classes("card-header", styles.cardheader)}>
          <Avatar Initials={MakeInitials("Haroon Rasheed")} />
        </div>
        <div className="card-body">
          <div className={styles.pinfo}>
            <table className={classes("table", styles.cardtable)}>
              <tr>
                <th>Emp Name: </th>
                <td>{info.firstname} {info.lastname}</td>
              </tr>
              <tr>
                <th>Emp Id: </th>
                <td>{info.empId}</td>
              </tr>
              <tr>
                <th>Dept: </th>
                <td>{info.dept}</td>
              </tr>
              <tr>
                <th>Role: </th>
                <td>{info.role}</td>
              </tr>
            </table>
          </div>
          <div className={styles.pinout}>
            <div className={styles.pincontainer}>
              <div>
                <button className="btn btn-success btn-md">
                  Punch In / Out
                </button>
              </div>
              <div>
                <button
                  className="btn btn-info btn-md"
                  data-target="#exampleModalLong"
                  data-toggle="modal"
                >
                  View Previous Records
                </button>
              </div>
            </div>
          </div>
          <div className={styles.leavecontainer}>
            {/* <div>
              <button
                className="btn btn-primary btn-block btn-md"
                data-target="#exampleModalLong"
                data-toggle="modal"
              >
                View Previous Records
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  ):<Redirect to={MainPaths.login} />;
};
const mapStateToProps = (store=>store.LoginInfo)
export default connect(mapStateToProps)(UserCard)