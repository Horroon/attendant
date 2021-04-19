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
            <i class="fa fa-fw fa-home"></i> Today Availability
          </div>
          <div className={styles.nestedrole}>
              <ul>
                  <li>Available</li>
                  <li>Unavailble</li>
                  <li>On Leaves</li>
              </ul>
          </div>
        </div>
        <div>
        <div className={styles.roleone}>
          <div className={styles.today}>
            <i class="fa fa-fw fa-home"></i> Overall Stats
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
