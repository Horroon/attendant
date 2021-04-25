import axios from "axios"
import { SERVER_PATH } from "../config";

export const UpdateEmployee = async( empId, empCode, fname, lname)=>{
    const path = SERVER_PATH + "/employee/update";
    const data = {  empId, empCode, fname, lname };
    const response = await axios
      .post(path, data, { method: "POST" })
      .then((res) => res.data);

    return response;
}