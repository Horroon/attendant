import React from "react";
import { Search } from "../../search/index";
import styles from "./style.module.scss";

const Setting = () => {
  return (
    <div className={styles.statscontainer}>
      <div className={styles.searchcontainer}>
        <Search placeholder="Search employee e.g Adnan" />
      </div>
      <div className={styles.body}>
        <div className={styles.listcontainer}>
          <div className={styles.actioncontainer}>
            <div className={styles.buttoncontainer}>
              <button className="btn btn-success btn-sm btn-block">
                Add New Employee
              </button>
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
                  <div className={styles.actiondiv}>
                    <div>
                      <i className="fas fa-edit" />
                    </div>{" "}
                    <div>
                      <i className="fas fa-trash" />
                    </div>{" "}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Setting;
