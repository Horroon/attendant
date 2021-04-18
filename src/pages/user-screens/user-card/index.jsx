import React from "react";
import styles from "./style.module.scss";
import { Avatar } from "../../avatar/index";
import { MakeInitials } from "../../../utilities/build-initials";
import { classes } from "../../../utilities/build-css-class";

export const UserCard = () => {
  return (
    <div className={styles.cardcontainer}>
      <div className= {classes("card w-50 m-auto", styles.card)}>
        <div className={classes("card-header", styles.cardheader)}>
          <Avatar Initials={MakeInitials("Haroon Rasheed")} />
        </div>
        <div className="card-body">
          <h5 className={styles.personame}>Haroon Rasheed</h5>
          <div>

          </div>
            <div className={styles.pinout}>
              <div>
                <button className="btn btn-success btn-block btn-md">
                  Punch In / Out
                </button>
              </div>
            </div>
          <div className={styles.leavecontainer}>
            <div>
              <button className="btn btn-primary btn-block btn-md" align='center'>
                View Records
              </button>
            </div>
            <div>
              <button className="btn btn-secondary btn-block btn-md">
                Leave
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
