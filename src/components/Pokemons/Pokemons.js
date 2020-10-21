import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCards} from "../../redux/actions/cardsActions";
import './style.scss'
import Card from "./Card";

const Pokemons = () => {

    const {cards} = useSelector(
        ({cards: {cards}}) =>
            ({cards}))
    const dispatch = useDispatch()

    useEffect(() => {
        getCards()(dispatch)
    }, [])

    const list = cards.map(card => <Card card={card} key={card.id} /> )

    return (
        <div className='container-pokemons'>
            <div className='columns card-gallery fade-in'>
                <div className='column'>
                    {list}
                </div>
            </div>
        </div>
    )
}

export default Pokemons