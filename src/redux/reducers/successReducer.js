import {CLEAR_SUCCESS, SET_SUCCESS} from "../types";

const initialState = {
    success: {
        message: null
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SUCCESS:
            return {
                ...state,
                success: {
                    ...state.success,
                    message: action.payload
                }
            }
        case CLEAR_SUCCESS:
            return initialState
        default:
            return state
    }
}