import axios from 'axios'
import {LOADING_START, LOADING_STOP, SET_POKEMON, SET_POKEMONS} from "../types";

export const getCards = (data) => dispatch => {

    const config = {
        params: {
            types: data.types || null,
            subtype: data.subtype || null
        }
    }

    dispatch({type: LOADING_START})
    axios.get('https://api.pokemontcg.io/v1/cards', config)
        .then(res => {
            dispatch({type: SET_POKEMONS, payload: res.data.cards})
            dispatch({type: LOADING_STOP})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: LOADING_STOP})
        })
}

export const getCard = (id) => dispatch => {
    dispatch({type: LOADING_START})
    axios.get('https://api.pokemontcg.io/v1/cards/' + id)
        .then(res => {
            dispatch({type: LOADING_STOP})
            dispatch({type: SET_POKEMON, action: res.data.card})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: LOADING_STOP})
        })
}