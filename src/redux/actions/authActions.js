import {LOADING_START, LOADING_STOP, LOGIN, LOGOUT, VERIFIED} from "../types";
import {clearTypes} from "./typeActions";
import {clearSubtypes} from "./subtypeActions";
import {clearPage} from "./paginationActions";

export const login = () => dispatch => {
    dispatch({type: LOADING_START})
    setTimeout(() => {
        dispatch({type: LOGIN})
        dispatch({type: LOADING_STOP})
    }, 2000)
}

export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
    dispatch(clearPage())
    dispatch(clearTypes())
    dispatch(clearSubtypes())
}

export const verify = () => dispatch => {
    dispatch({type: LOADING_START})
    setTimeout(() => {
        dispatch({type: VERIFIED})
        dispatch({type: LOADING_STOP})
    }, 2000)
}

