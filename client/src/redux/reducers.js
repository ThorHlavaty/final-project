import { combineReducers } from "redux";
import { SET_ACCORDIONINDEX } from "./actions";




function accordionIndexReducer(state=(-1), action) {
    switch (action.type) {
        case SET_ACCORDIONINDEX:
            return action.payload.accordionIndex
        
        
            
            default:
            return state;
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) { 
        case 'USER_REGISTER_REQUEST':
            return {loading: true};
        case 'USER_REGISTER_SUCCESS':
            return {loading: false, userInfo: action.payload };
        case 'USER_REGISTER_FAIL':
            return {loading: false, error: action.payload };
        default:
            return state;
    } 
} 

export const userSigninReducer = (state = {loading: false, check:false}, action) => {
    switch(action.type) { 
        case 'USER_SIGNIN_REQUEST':
            return {loading: true};
        case 'USER_SIGNIN_SUCCESS':
            return {loading: false, userInfo: action.payload, check: true };
        case 'USER_SIGNIN_FAIL':
            return {loading: false, error: action.payload, check: true };
        case 'USER_SIGNOUT':
            return {loading: true, check: true};
        default:
            return state;
    }
}



export const rootReducer = combineReducers({
    accordionIndex: accordionIndexReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
})