export const SET_ACCORDIONINDEX = 'SET_ACCORDIONINDEX'




export function setAccordionIndex(accordionIndex) {
    return {
        type: SET_ACCORDIONINDEX,
        payload: {
            accordionIndex
        }
    }
}

