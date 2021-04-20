import React from "react";
import styles from "./style.module.scss";
import { Avatar } from "../../avatar/index";
import { MakeInitials } from "../../../utilities/build-initials";
import { classes } from "../../../utilities/build-css-class";

export const UserCard = () => {
  return (
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
                <td>Haroon Rasheed</td>
              </tr>
              <tr>
                <th>Mini hours: </th>
                <td>2h</td>
              </tr>
              <tr>
                <th>Dept: </th>
                <td>IT</td>
              </tr>
              <tr>
                <th>Role: </th>
                <td>Consultant</td>
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
                  className="btn btn-primary btn-md"
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
  );
};
