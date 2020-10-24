import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getTypes, setCurrentType} from "../../redux/actions/typeActions";
import {getSubtypes, setCurrentSubtype} from "../../redux/actions/subtypeActions";
import './style.scss'
import arrow from '../../assets/svg/arrow-down.svg'
import Option from "./Option";


const Filter = () => {

    const {types, subtypes, currentType, currentSubtype} = useSelector(
        ({type: {types, currentType}, subtype: {subtypes, currentSubtype}}) =>
            ({types, subtypes, currentType, currentSubtype}))
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
                <p>Types:</p>
                <div className='filter-row'>
                    <select onChange={(event) => setCurrentType(event.currentTarget.value)(dispatch)}
                            value={currentType}>
                        <option value="default">None</option>
                        {typeOptions}
                    </select>
                    <img src={arrow} alt='arrow'/>
                </div>
            </div>
            <div className="filter-content">
                <p>Subtypes:</p>
                <div className='filter-row'>
                    <select onChange={(event) => setCurrentSubtype(event.currentTarget.value)(dispatch)}
                            value={currentSubtype}>
                        <option value="default">None</option>
                        {subtypeOptions}
                    </select>
                    <img src={arrow} alt='arrow'/>
                </div>
            </div>
        </div>
    )
}

export default Filter