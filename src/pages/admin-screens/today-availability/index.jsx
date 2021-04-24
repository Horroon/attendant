import React from "react";
import { classes } from "../../../utilities/build-css-class";
import styles from "./style.module.scss";
import { Search } from "../../search/index";


export const TodayAvailability = ({ records = [], title }) => {
  return title && (
    <div className={styles.availabilityContainer}>
      <div className={classes("row", styles.availabityhead)}>
        <div className={classes("col-lg-12", "col-md-12", styles.title)}>
          <div className={styles.availablitysearch}>
            <Search placeholder="Search by name" />
          </div>
          <h4>{title}</h4>
        </div>
        <div className={classes("col-lg-12", "col-md-12",styles.tableContainer)}>
          <table className={classes("table table-bordered", styles.table)}>
            <thead className={classes(styles.thead)}>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => {
                return (
                  <tr id={"avail-" + index}>
                    <td>{index + 1}</td>
                    <td>{record.firstname}</td>
                    <td>{record.lastname}</td>
                    <td>{record.dept}</td>
                    <td>{record.role}</td>
                    <td>{record.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.norecord}>
            {!records.length && "No record exists"}
          </div>
        </div>
      </div>
    </div>
  );
};
