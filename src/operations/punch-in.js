import axios from "axios";
import { SERVER_PATH } from "../config/index";

export const EmployeePunchIn = async (empId, empCode, punchindate) => {
  const path = SERVER_PATH + "/employee/punch/in";
  const data = { empId: empId, empCode: empCode, punchindate: punchindate };
  const loggedInUser = await axios
    .post(path, data, { method: "POST" })
    .then((res) => res.data);

  return loggedInUser;
};
