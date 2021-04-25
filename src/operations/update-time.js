import axios from "axios"
import { SERVER_PATH } from "../config";

export const UpdateTime = async( empId, empCode, time)=>{
    const path = SERVER_PATH + "/update/time";
    const data = {  empId, empCode, time };
    const response = await axios
      .post(path, data, { method: "POST" })
      .then((res) => res.data);

    return response;
}