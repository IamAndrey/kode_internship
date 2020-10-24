import {CLEAR_TYPES, SET_CURRENT_TYPE, SET_TYPES} from "../types";

const initialState = {
    types: [],
    currentType: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case SET_CURRENT_TYPE:
            return {
                ...state,
                currentType: action.payload
            }
        case CLEAR_TYPES:
            return initialState
        default:
            return state
    }
}