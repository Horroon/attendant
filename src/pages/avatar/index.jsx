import React from "react";
import { classes } from "../../utilities/build-css-class";
import styles from "./style.module.scss";

export const Avatar = ({ Initials, url, id = "default", className= styles.initialclass }) => {
  return url ? (
    <div id={id} className={classes(styles["avart-imge-container"], className)}>
      <img className={"avatar-" + id} />
    </div>
  ) : (
    <div className={classes(styles["initial-container"], className)}>
      <h6>{Initials}</h6>
    </div>
  );
};
