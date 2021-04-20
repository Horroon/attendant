import React from "react";
import { Search } from "../../search";
import styles from "./style.module.scss";

const OverallStats = () => {
  return (
    <div className={styles.statscontainer}>
      <div className={styles.searchcontainer}>
        <Search placeholder="Search employee e.g Adnan" />
      </div>
      <div className={styles.body}>
        <div className={styles.listcontainer}>
          <div className={styles.actionscontainer}>
            <div className={styles.periods}>
              <label>Time Period: </label>
              <select>
                <option>1 month</option>
                <option>3 months</option>
                <option>6 months</option>
                <option>12 months</option>
              </select>
            </div>
            <div className={styles.sortedcontainer}>
              <labe>Sorted by: </labe>
              <select className={styles.select}>
                <option>Name</option>
                <option>Working Hours</option>
              </select>
            </div>
          </div>
          <ul id="sortable" className="list-group">
            {[1, 2, 3, 4, 5].map((emp) => (
              <li className="list-group-item">
                <div className="d-flex justify-content-around">
                  <div>Firstname</div>
                  <div>Lastname</div>
                  <div>Ave Working Hours</div>
                  <div>Total Working hours</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverallStats;
