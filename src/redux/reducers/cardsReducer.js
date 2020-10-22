import {CLEAR_CARDS, SET_POKEMON, SET_POKEMONS} from "../types";

const initialState = {
    cards: [],
    card: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                cards: action.payload
            }
        case SET_POKEMON:
            return {
                ...state,
                card: action.payload
            }
        case CLEAR_CARDS:
            return initialState
        default:
            return state
    }
}