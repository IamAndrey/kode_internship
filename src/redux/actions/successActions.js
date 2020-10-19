import {CLEAR_SUCCESS, SET_SUCCESS} from "../types";

export const setSuccess = (message) => dispatch => {
    dispatch({type: SET_SUCCESS, payload: message})
}

export const clearSuccess = () => dispatch => {
    dispatch({type: CLEAR_SUCCESS})
}