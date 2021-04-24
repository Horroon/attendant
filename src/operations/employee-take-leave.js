import axios from "axios";
import { SERVER_PATH } from "../config/index";

export const EmployeeTakeLeave = async (empId, empCode, leavedate) => {
  const path = SERVER_PATH + "/employee/take/leave";
  const data = { empId: empId, empCode: empCode,leavedate: leavedate };
  const loggedInUser = await axios
    .post(path, data, { method: "POST" })
    .then((res) => res.data);

  console.log("logged in user", loggedInUser);
  return loggedInUser;
};
