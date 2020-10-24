import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCards} from "../../redux/actions/cardsActions";
import './style.scss'
import Card from "./Card";
import Pagination from "../Pagination/Pagination";
import Missing from "../Missing/Missing";

const Pokemons = () => {

    const {cards, currentType, currentSubtype, currentPage, pageSize} = useSelector(
        ({cards: {cards}, type: {currentType}, subtype: {currentSubtype}, pagination: {currentPage, pageSize}}) =>
            ({cards, currentType, currentSubtype, currentPage, pageSize}))
    const dispatch = useDispatch()

    useEffect(() => {
        const param = {
            types: currentType,
            subtype: currentSubtype,
            pageSize: pageSize,
            page: currentPage
        }
        getCards(param)(dispatch)
    }, [currentType, currentSubtype, currentPage])

    const list = cards.map(card => <Card card={card} key={card.id}/>)

    return (
        <div className='container-pokemons'>
            <div className='columns card-gallery'>
                <div className='column'>
                    {list.length === 0 ?
                        <Missing/> :
                        list}
                </div>
            </div>
            <Pagination/>
        </div>
    )
}

export default Pokemons