import axios from "axios";
import { SERVER_PATH } from "../config/index";

export const EmployeeChangePinCode = async (empId, empNewCode, empOldCode) => {
  const path = SERVER_PATH + "/employee/change/pincode";
  const data = {empId, empNewCode, empOldCode };
  const loggedInUser = await axios
    .post(path, data, { method: "POST" })
    .then((res) => res.data);

  console.log("logged in user", loggedInUser);
  return loggedInUser;
};
