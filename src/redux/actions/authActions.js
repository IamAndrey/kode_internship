import {LOADING_START, LOADING_STOP, LOGIN, LOGOUT} from "../types";

export const login = () => dispatch => {
    dispatch({type: LOADING_START})
    setTimeout(() => {
        dispatch({type: LOGIN})
        dispatch({type: LOADING_STOP})
    }, 2000)
}

export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
}