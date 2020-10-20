import React from "react";
import Pokemons from "../components/Pokemons/Pokemons";
import Filter from "../components/Filter/Flter";

const PokemonsPage = (props) => {
    return (
        <div className='pokemons-page container-content'>
            <Filter />
            <Pokemons />
        </div>
    )
}

export default PokemonsPage