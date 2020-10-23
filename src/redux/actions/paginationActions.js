import {CLEAR_PAGINATION, SET_CURRENT_PAGE} from "../types";

export const setCurrentPage = (page) => dispatch => {
    dispatch({type: SET_CURRENT_PAGE, payload: page})
}

export const clearPage = () => dispatch => {
    dispatch({type: CLEAR_PAGINATION})
}