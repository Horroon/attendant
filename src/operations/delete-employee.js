import axios from "axios"
import { SERVER_PATH } from "../config";

export const DeleteEmployee = async( empId)=>{
    const path = SERVER_PATH + '/employee/delete';
    const data = {  empId };
    const response = await axios
      .post(path, data, { method: "POST" })
      .then((res) => res.data);

    return response;
}