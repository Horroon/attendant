import {User} from '../constants/properties';
export const LoginInfo = {
    state:{
        role:User.roles.user
    },
    reducers:{
        updateinfo:(state,payload)=>({...state, ...payload}),
        updaterole:(state,payload)=>({...state, role: payload})
    }
}