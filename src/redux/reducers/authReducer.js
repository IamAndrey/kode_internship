import {LOGIN, LOGOUT} from "../types";

const initialState = {
    authenticated: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }
        default:
            return state
    }
}