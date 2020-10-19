import {CLEAR_ERROR, SET_ERROR} from "../types";

const initialState = {
    error: {
        message: null
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    message: action.payload
                }
            }
        case CLEAR_ERROR:
            return initialState
        default:
            return state
    }
}