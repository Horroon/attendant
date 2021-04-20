import { Adminpages } from "../constants/properties";

export const Admin = {
  state: {
    availabilities: {
      availables: [],
      unavailables: [],
      onleaves: [],
    },
    currentpageId: Adminpages.availability.subpages.onleaves.id,
  },
  reducers: {
      updatepageId:(state,payload)=>({...state, currentpageId: payload})
  },
};
