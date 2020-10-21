import {CLEAR_CARDS, SET_POKEMONS} from "../types";

const initialState = {
    cards: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                cards: action.payload
            }
        case CLEAR_CARDS:
            return initialState
        default:
            return state
    }
}