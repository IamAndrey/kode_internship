import {LOGIN, LOGOUT} from "../types";

export const login = () => dispatch => {
    dispatch({type: LOGIN})
}

export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
}