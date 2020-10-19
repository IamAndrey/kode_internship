import {LOGIN, LOGOUT, NOT_VERIFIED, VERIFIED} from "../types";

const initialState = {
    authenticated: false,
    verified: false
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
        case VERIFIED:
            return {
                ...state,
                verified: true
            }
        case NOT_VERIFIED:
            return {
                ...state,
                verified: false
            }
        default:
            return state
    }
}