import React from "react";
import styles from "./style.module.scss";

export const Search = ({placeholder}) => {
  return (
    <div className={styles.searchcontainer}>
      <div className={styles.inputcontainer}>
        <input placeholder={placeholder}/>
      </div>
      <div className={styles.iconcontainer}>
        <i className="fas fa-search" />
      </div>
    </div>
  );
};
