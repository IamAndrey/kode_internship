import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getTypes} from "../../redux/actions/typeActions";
import {getSubtypes} from "../../redux/actions/subtypeActions";
import './style.scss'
import arrow from '../../assets/svg/arrow.svg'
import Option from "./Option";


const Filter = () => {

    const {types, subtypes} = useSelector(
        ({type: {types}, subtype: {subtypes}}) =>
            ({types, subtypes}))
    const dispatch = useDispatch()

    useEffect(() => {
        getTypes()(dispatch)
        getSubtypes()(dispatch)
    }, [])

    const typeOptions = types.map(type => <Option value={type} key={type} />)
    const subtypeOptions = subtypes.map(subtype => <Option value={subtype} key={subtype} />)

    return (
        <div className='container-filter'>
            <h4>Выбор категорий</h4>
            <div className="filter-content">
                <div className='filter-row'>
                    <select onChange={() => {}} defaultValue='default'>
                        <option value="default" disabled>Type:</option>
                        {typeOptions}
                    </select>
                    <img src={arrow} alt='arrow'/>
                </div>
            </div>
            <div className="filter-content">
                <div className='filter-row'>
                    <select onChange={() => {}} defaultValue='default'>
                        <option value="default" disabled>Subtype:</option>
                        {subtypeOptions}
                    </select>
                    <img src={arrow} alt='arrow'/>
                </div>
            </div>
        </div>
    )
}

export default Filter