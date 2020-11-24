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



export const rootReducer = combineReducers({
    accordionIndex: accordionIndexReducer
})