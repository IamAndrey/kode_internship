import {LOADING_START, LOADING_STOP} from "../types";

const initialState = {
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_START:
            return {
                ...state,
                loading: true
            }
        case LOADING_STOP:
            return {
                ...state,
                loading: false
            }
        default:
            return initialState
    }
}