import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import CardSkeleton from "../Loader/Skeleton/CardSkeleton";
import Magnifier from '../../assets/svg/Magnifier.svg'
import {Link} from "react-router-dom";

const Card = ({card}) => {

    const {loading} = useSelector(({ui: {loading}}) => ({loading}))

    return (
        <Fragment>
            {loading ?
                <CardSkeleton /> :
                <div className='card'>
                    <Link to={`/pokemons/${card.id}`} >
                        <img src={card.imageUrl} alt='Card'/>
                    </Link>
                    <div className='large'>
                        <img src={Magnifier} alt='Magnifier'/>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Card