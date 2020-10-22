import React, {useEffect, Fragment} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCard} from "../../redux/actions/cardsActions";
import './style.scss'
import Attack from "./Attributes/Attack/Attack";
import Resistances from "./Attributes/Resistances/Resistances";

const Pokemon = (props) => {

    const _ID = props.match.params.id;

    const {card, loading} = useSelector(
        ({cards: {card}, ui: {loading}}) =>
            ({card, loading})
    )
    const dispatch = useDispatch()

    useEffect(() => {
        getCard(_ID)(dispatch)
    }, [card.id])

    const types = card.types ? card.types.map(type =>
        <div className="pokemon-attribute" key={type}>
            Type:
            <span>{type}</span>
        </div>) : null

    const attacks = card.attacks ? card.attacks.map(attack => <Attack attack={attack} key={attack.name}/>) : null
    const resistances = card.resistances ? card.resistances.map(res => <Resistances resistance={res} />) : <span>N/A</span>

    return (
        <div className='container-content pokemon-page'>
            <div className='column-one'>
                <img src={card.imageUrlHiRes} alt='pokemon'/>
            </div>
            <div className='column-two'>
                <div className="pokemon-attribute">
                    Pokemon name:
                    <span>{card.name}</span>
                </div>
                {types}
                <div className="pokemon-attribute">
                    Subtype:
                    <span>{card.subtype}</span>
                </div>
                <div className="pokemon-attribute line"></div>
                {attacks}
                <div className="pokemon-attribute">
                    Evolves form:
                    <span>{card.evolvesFrom || 'N/A'}</span>
                </div>
                <div className="pokemon-attribute">
                    Resistances:
                    {resistances}
                </div>
            </div>
            <div className='description'>

            </div>
        </div>
    )
}

export default Pokemon