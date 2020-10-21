import {SET_CURRENT_SUBTYPE, SET_SUBTYPES} from "../types";


const initialState = {
    subtypes: [],
    currentSubtype: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SUBTYPES:
            return {
                ...state,
                subtypes: action.payload
            }
        case SET_CURRENT_SUBTYPE:
            return {
                ...state,
                currentSubtype: action.payload
            }
        default:
            return state
    }
}