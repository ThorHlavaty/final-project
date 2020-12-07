import axios from 'axios';

export const SET_ACCORDIONINDEX = 'SET_ACCORDIONINDEX'
export const SET_CURRENTGUEST = 'SET_CURRENTGUEST'
export const SET_GUESTCOUNT = 'SET_GUESTCOUNT'
export const SET_GUESTITEMSOBJECT = 'SET_GUESTITEMSOBJECT'
export const SET_TABLEID = 'SET_TABLEID'
export const SET_TABLENUM = 'SET_TABLENUM'
export const SET_TOTALBILL = 'SET_TOTALBILL'
export const ADD_TOTALBILL = 'ADD_TOTALBILL'
export const REDUCE_TOTALBILL = 'REDUCE_TOTALBILL'
export const SET_MANAGER = 'SET_MANAGER'




export function setAccordionIndex(accordionIndex) {
    return {
        type: SET_ACCORDIONINDEX,
        payload: {
            accordionIndex
        }
    }
}

export function setCurrentGuest(currentGuest) {
    return {
        type: SET_CURRENTGUEST,
        payload: {
            currentGuest
        }
    }
}

export function setGuestCount(guestCount) {
    return {
        type: SET_GUESTCOUNT,
        payload: {
            guestCount
        }
    }
}

export function setGuestItemsObject(guestItemsObject) {
    return {
        type: SET_GUESTITEMSOBJECT,
        payload: {
            guestItemsObject
        }
    }
}

export function setManager(manager) {
    return {
        type: SET_MANAGER,
        payload: {
            manager
        }
    }
}

export function setTotalBill(totalBill) {
    return {
        type: SET_TOTALBILL,
        payload: {
            totalBill
        }
    }
}

export function addTotalBill(totalBill) {
    return {
        type: ADD_TOTALBILL,
        payload: {
            totalBill
        }
    }
}
export function reduceTotalBill(totalBill) {
    return {
        type: REDUCE_TOTALBILL,
        payload: {
            totalBill
        }
    }
}

export function setTableId(tableId) {
    return {
        type: SET_TABLEID,
        payload: {
            tableId
        }
    }
}

export function setTableNum(tableNum) {
    return {
        type: SET_TABLENUM,
        payload: {
            tableNum
        }
    }
}

export const removeItem = (itemIndex, guestId, itemDBID=null) => async(dispatch) =>{
    if(itemDBID){
        try{
            const {data} = await axios.delete(`/api/v1/item/${itemDBID}`)
            dispatch({type: 'REMOVE_ITEM', payload: {
                itemIndex,
                guestId
            }})
        } catch(error){
            console.log(error)
            alert('Fail To Delete Item Try Again')
        }
    } else {
            dispatch({type: 'REMOVE_ITEM', payload: {
                itemIndex,
                guestId
            }})
    }
}


export const register = (name, pin) => async(dispatch) => {
    dispatch({ 
        type: 'USER_REGISTER_REQUEST',
        payload: { name, pin } })
        try {
            const {data} = await axios.post('/users/register', { name, pin })
            dispatch({type: 'USER_REGISTER_SUCCESS', payload: data})
            dispatch({type: 'USER_SIGNIN_SUCCESS', payload: data.user})
            localStorage.setItem("userInfo", JSON.stringify(data))
        } catch(error) {
            dispatch({ type: 'USER_REGISTER_FAIL',
                payload: error.response && error.response.data.message
                ? error.response.data.message 
                : error.message, 
            })
        }
}; 

export const signin = (id, pin) => async(dispatch) => {
    dispatch({ 
        type: 'USER_SIGNIN_REQUEST',
        payload: { id, pin } })
        try {
            const {data} = await axios.post('/users/login', { id, pin })
            dispatch({type: 'USER_SIGNIN_SUCCESS', payload: data.user})
            localStorage.setItem("userInfo", JSON.stringify(data))
        } catch(error) {
            dispatch({ type: 'USER_SIGNIN_FAIL',
                payload: error.response && error.response.data.error
                ? error.response.data.error 
                : error.message, 
            })
        }
}; 

export const signout = () => async(dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: 'USER_SIGNOUT'
    })
    try {
        const {data} = await axios.get('/users/logout')
        dispatch({type: 'USER_SIGNOUT'})
        localStorage.removeItem('userInfo', JSON.stringify(data))
    } catch(error) {
        console.log(error)
    }
}

export const checkAuth = () => async(dispatch) => {
    dispatch({ 
        type: 'USER_SIGNIN_REQUEST',})
        
        try {
            const {data} = await axios.get('/users/current')
            dispatch({type: 'USER_SIGNIN_SUCCESS', payload: data.user})
            localStorage.setItem("userInfo", JSON.stringify(data))
        } catch(error) {
            dispatch({ type: 'USER_SIGNIN_FAIL',
                payload: error.response && error.response.data.error
                ? error.response.data.error 
                : error.message, 
            })
        }
}