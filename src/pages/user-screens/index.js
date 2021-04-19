import React from "react";
import { UserCard } from "./user-card/index";
import { DrawerModel } from "./drawer-model/index";

export const UserScreen = ({ role }) =>
  role === "user" && (
    <div>
      <UserCard />
      <DrawerModel />
    </div>
  );
