import axios from 'axios'
import {CLEAR_TYPES, SET_CURRENT_TYPE, SET_TYPES} from "../types";

export const getTypes = () => dispatch => {
    axios.get('https://api.pokemontcg.io/v1/types')
        .then(res => {
            dispatch({type: SET_TYPES, payload: res.data.types})
        })
        .catch(err => {
            console.log(err)
        })
}

export const setCurrentType = (type) => dispatch => {
    dispatch({type: SET_CURRENT_TYPE, payload: type})
}

export const clearTypes = () => dispatch => {
    dispatch({type: CLEAR_TYPES})
}