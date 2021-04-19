import React from "react";
import { classes } from "../../../utilities/build-css-class";
import styles from "./style.module.scss";

export const TodayAvailability = () => {
  return (
    <div className={styles.availabilityContainer}>
      <div className={classes("row", styles.availabityhead)}>
        <div className={classes("col-lg-4", "col-md-4", styles.title)}>
          Available
        </div>
        <div className={classes("col-lg-4", "col-md-4", styles.title)}>
          Unvailable
        </div>
        <div className={classes("col-lg-4", "col-md-4", styles.title)}>
          On Leaves
        </div>
      </div>
    </div>
  );
};
