import React from "react";

const Card = ({card}) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={`/pokemons/${card.id}`}>
            <img src={card.imageUrl} alt='Card' />
        </a>
    )
}

export default Card