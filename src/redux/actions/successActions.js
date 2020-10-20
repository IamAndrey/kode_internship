import {CLEAR_SUCCESS, SET_SUCCESS} from "../types";

export const setSuccess = (code) => dispatch => {
    dispatch({type: SET_SUCCESS, payload: code})
}

export const clearSuccess = () => dispatch => {
    dispatch({type: CLEAR_SUCCESS})
}