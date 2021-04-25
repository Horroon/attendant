import axios from "axios"
import { SERVER_PATH } from "../config";

export const AddNewEmployee = async(empId, empCode, fname, lname, role, email,dept)=>{
    const path = SERVER_PATH + "/addnew/employee";
    const data = { empId, empCode, fname, lname, role, email,dept };
    const response = await axios
      .post(path, data, { method: "POST" })
      .then((res) => res.data);

    return response;
}