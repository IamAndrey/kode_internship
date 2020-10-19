import {CLEAR_ERROR, LOADING_START, LOADING_STOP, SET_ERROR} from "../types";

export const setError = (message) => dispatch => {
    dispatch({type: LOADING_START})
    setTimeout(() => {
        dispatch({type: SET_ERROR, payload: message})
        dispatch({type: LOADING_STOP})
    }, 2000)
}

export const clearError = () => dispatch => {
    dispatch({type: CLEAR_ERROR})
}