import axios from "axios";
import {SET_CURRENT_SUBTYPE, SET_SUBTYPES} from "../types";

export const getSubtypes = () => dispatch => {
    axios.get('https://api.pokemontcg.io/v1/subtypes')
        .then(res => {
            dispatch({type: SET_SUBTYPES, payload: res.data.subtypes})
        })
        .catch(err => {
            console.log(err)
        })
}

export const setCurrentSubtype = (subtype) => dispatch => {
    dispatch({type: SET_CURRENT_SUBTYPE, payload: subtype})
}
