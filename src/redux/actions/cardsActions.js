import axios from 'axios'
import {LOADING_START, LOADING_STOP, SET_POKEMONS} from "../types";

export const getCards = () => dispatch => {
    dispatch({type: LOADING_START})
    axios.get('https://api.pokemontcg.io/v1/cards')
        .then(res => {
            dispatch({type: SET_POKEMONS, payload: res.data.cards})
            dispatch({type: LOADING_STOP})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: LOADING_STOP})
        })
}