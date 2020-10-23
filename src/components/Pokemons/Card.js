import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import CardSkeleton from "../Loader/Skeleton/CardSkeleton";

const Card = ({card}) => {

    const {loading} = useSelector(({ui: {loading}}) => ({loading}))

    return (
        <Fragment>
            {loading ?
                <CardSkeleton /> :
                <a href={`/pokemons/${card.id}`}>
                    <img src={card.imageUrl} alt='Card'/>
                </a>
            }
        </Fragment>
    )
}

export default Card