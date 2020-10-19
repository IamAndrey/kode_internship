import {CLEAR_SUCCESS, LOADING_START, LOADING_STOP, SET_SUCCESS} from "../types";

export const setSuccess = (message) => dispatch => {
    dispatch({type: LOADING_START})
    setTimeout(() => {
        dispatch({type: SET_SUCCESS, payload: message})
        dispatch({type: LOADING_STOP})
    }, 2000)
}

export const clearSuccess = () => dispatch => {
    dispatch({type: CLEAR_SUCCESS})
}