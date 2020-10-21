import axios from 'axios'
import {SET_CURRENT_TYPE, SET_TYPES} from "../types";

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