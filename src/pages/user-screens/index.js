import React from "react";
import  UserCard  from "./user-card/index";
import { DrawerModel } from "./drawer-model/index";
import styles from './style.module.scss';
import { User } from "../../constants/properties";

export const UserScreen = ({ role }) =>
  role === User.roles.user && (
    <div className={styles.usermainbody}>
      <UserCard />
      <DrawerModel />
    </div>
  );
