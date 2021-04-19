import React from "react";
import { MakeInitials } from "../../../utilities/build-initials";
import { Avatar } from "../../avatar";
import styles from "./style.module.scss";

export const AdminSideNav = () => {
  return (
    <div className={styles.sidenav}>
      <div className={styles.info}>
        <div className={styles.imgcontainer}>
          <Avatar Initials={MakeInitials("Haroon Rasheed")} />
        </div>
        <div className={styles.namecontainer}>
          <h4>Haroon Rasheed</h4>
        </div>
      </div>
      <div className={styles.adminroles}>
        <div className={styles.roleone}>
          <div className={styles.today}>
            <i className="fas fa-list"></i> <span>Today Availability</span>
          </div>
          <div className={styles.nestedrole}>
            <ul>
              <li>
                {" "}
                <i className="fa fa-clock" /> Available
              </li>
              <li>
                {" "}
                <i className="fas fa-pencil-alt" /> Unavailble
              </li>
              <li>
                {" "}
                <i className="fas fa-sign-out-alt" /> On Leaves
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.roletwo}>
            <div className={styles.ostate}>
              <i class="fas fa-clipboard"></i> Overall Stats
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#" className="float">
          <i class="fas fa-cog"></i>
        </a>
      </div>
    </div>
  );
};
