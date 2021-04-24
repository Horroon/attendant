import axios from "axios";
import { SERVER_PATH } from "../config/index";

export const AdminLogin = async (empId, empCode) => {
  const path = SERVER_PATH + "/admin/login";
  const data = { empId: empId, empCode: empCode };
  const loggedInUser = await axios
    .post(path, data, { method: "POST" })
    .then((res) => res.data);

  console.log("logged in user", loggedInUser);
  return loggedInUser;
};
