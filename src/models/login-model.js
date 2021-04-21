import {User} from '../constants/properties';
export const LoginInfo = {
    state:{
        role:User.roles.user,
        isLoggedIn: false,
        info:{}
    },
    reducers:{
        updateinfo:(state,payload)=>({...state, ...payload}),
        updaterole:(state,payload)=>({...state, role: payload})
    }
}