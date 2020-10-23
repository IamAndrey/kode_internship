import {CLEAR_PAGINATION, SET_CURRENT_PAGE} from "../types";

const initialState = {
    pageSize: 9,
    currentPage: 1,
    total: 100
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case CLEAR_PAGINATION:
            return initialState
        default:
            return state
    }
}