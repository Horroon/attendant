import {User} from '../constants/properties';
export const LoginInfo = {
    state:{
        role:User.roles.admin
    },
    reducers:{
        updateinfo:(state,payload)=>({...state, ...payload}),
        updaterole:(state,payload)=>({...state, role: payload})
    }
}