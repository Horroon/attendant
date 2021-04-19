import React from "react";
import { TodayAvailability } from "./today-availability/index";
import {AdminSideNav} from './sidenav/index';

export const Adminscreen = ({ role }) =>
  role === "admin" && (
    <div>
      <AdminSideNav />
      <TodayAvailability />
    </div>
  );
