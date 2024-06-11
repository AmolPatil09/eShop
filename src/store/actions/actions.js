import { CHANGE_LOGIN_STATE } from "./actionType";

export const changeLoginState=(status)=>{
    return {type:CHANGE_LOGIN_STATE,
        payLoad:{
         status:status
        }
    }
}