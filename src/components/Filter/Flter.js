import React from "react";
import './style.scss'
import arrow from '../../assets/svg/arrow.svg'


const Filter = () => {
    return (
        <div className='container-filter'>
            <h4>Выбор категорий</h4>
            <div className="filter-content">
                <div className='filter-row'>
                    <select onChange={() => {}} defaultValue='default'>
                        <option value="default" disabled>Тип:</option>
                        <option value="skills">Навыкам</option>
                        <option value="technologies">Технологиям</option>
                    </select>
                    <img src={arrow} alt='arrow'/>
                </div>
            </div>
            <div className="filter-content">
                <div className='filter-row'>
                    <select onChange={() => {}} defaultValue='default'>
                        <option value="default" disabled>Подтип:</option>
                        <option value="skills">Навыкам</option>
                        <option value="technologies">Технологиям</option>
                    </select>
                    <img src={arrow} alt='arrow'/>
                </div>
            </div>
        </div>
    )
}

export default Filter