import axios from "axios";
import { SERVER_PATH } from "../config/index";

export const EmployeePunchOut = async (empId, empCode, punchoutdate, ispreviousday=false) => {
  const path = SERVER_PATH + "/employee/punch/out";
  const data = { empId: empId, empCode: empCode,punchoutdate:punchoutdate,ispreviousday:ispreviousday };
  const loggedInUser = await axios
    .post(path, data, { method: "POST" })
    .then((res) => res.data);

  return loggedInUser;
};
