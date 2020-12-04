import { combineReducers } from "redux";
import { ADD_TOTALBILL, REDUCE_TOTALBILL, SET_ACCORDIONINDEX, SET_CURRENTGUEST, SET_GUESTCOUNT, SET_GUESTITEMSOBJECT, SET_TABLEID, SET_TABLENUM, SET_TOTALBILL } from "./actions";




function accordionIndexReducer(state=(-1), action) {
    switch (action.type) {
        case SET_ACCORDIONINDEX:
            return action.payload.accordionIndex
        
        
            
            default:
            return state;
    }
}

function tableIdReducer(state=(0), action) {
    switch (action.type) {
        case SET_TABLEID:
            return action.payload.tableId
        
        
            
            default:
            return state;
    }
}

function totalBillReducer(state=(0.00), action) {
    switch (action.type) {
        case SET_TOTALBILL:
            return action.payload.totalBill
        
        case ADD_TOTALBILL:
            return (action.payload.totalBill + state)
        
        case REDUCE_TOTALBILL:
            return (state - action.payload.totalBill)
        
        
            
            default:
            return state;
    }
}

function tableNumReducer(state=(0), action) {
    switch (action.type) {
        case SET_TABLENUM:
            return action.payload.tableNum
        
        
            
            default:
            return state;
    }
}

function currentGuestReducer(state=(1), action) {
    switch (action.type) {
        case SET_CURRENTGUEST:
            return action.payload.currentGuest
        
        
            
            default:
            return state;
    }
}

function guestCountReducer(state=(1), action) {
    switch (action.type) {
        case SET_GUESTCOUNT:
            return action.payload.guestCount
        
        
            
            default:
            return state;
    }
}

function guestItemsObjectReducer(state={1:[]}, action) {
    switch (action.type) {
        case SET_GUESTITEMSOBJECT:
            return action.payload.guestItemsObject
        case 'REMOVE_ITEM':
            const {guestId, itemIndex} = action.payload
            const newGuest = [...state[guestId]]
            newGuest.splice(itemIndex,1)
            return {
                ...state,
                [guestId]:newGuest
            }
        
            
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
    currentGuest: currentGuestReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    guestCount: guestCountReducer,
    guestItemsObject: guestItemsObjectReducer,
    tableId: tableIdReducer,
    tableNum: tableNumReducer,
    totalBill:totalBillReducer
})