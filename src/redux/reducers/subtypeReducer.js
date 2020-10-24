import {CLEAR_SUBTYPES, SET_CURRENT_SUBTYPE, SET_SUBTYPES} from "../types";


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
        case CLEAR_SUBTYPES:
            return initialState
        default:
            return state
    }
}