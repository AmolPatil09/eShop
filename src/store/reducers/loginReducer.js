import { CHANGE_LOGIN_STATE } from "../actions/actionType";

const initialState={
    islogin:false
}

const loginReducer=(state=initialState,action)=>{
   
    switch(action.type){
        case CHANGE_LOGIN_STATE :
            return ({...state,islogin:(action.payLoad.status)});
        default:
            return state;
    }
  
}
export default loginReducer;