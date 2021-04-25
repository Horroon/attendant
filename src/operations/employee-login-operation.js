import axios from "axios";
import { SERVER_PATH } from "../config/index";

export const EmployeeLogin = async (empId, empCode) => {
  const path = SERVER_PATH + "/employee/login";
  const data = { empId: empId, empCode: empCode };
  const loggedInUser = await axios
    .post(path, data, { method: "POST" })
    .then((res) => res.data);

  return loggedInUser;
};
