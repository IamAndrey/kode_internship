import React, {Fragment, useState} from "react";
import {useSelector} from "react-redux";
import CardSkeleton from "../Loader/Skeleton/CardSkeleton";
import Magnifier from '../../assets/svg/Magnifier.svg'
import {Link} from "react-router-dom";
import ModalPokemon from "../Modals/ModalPokemon/ModalPokemon";

const Card = ({card}) => {

    const [show, setShow] = useState(false)
    const {loading} = useSelector(({ui: {loading}}) => ({loading}))

    return (
        <Fragment>
            {loading ?
                <CardSkeleton /> :
                <div className='card'>
                    <Link to={`/pokemons/${card.id}`} >
                        <img src={card.imageUrl} alt='Card'/>
                    </Link>
                    <div className='large' onClick={(event) => setShow(true)}>
                        <img src={Magnifier} alt='Magnifier'/>
                    </div>
                </div>
            }
            {show ? <ModalPokemon image={card.imageUrlHiRes} close={() => setShow(false)}/> : null}
        </Fragment>
    )
}

export default Card