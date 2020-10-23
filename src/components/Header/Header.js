import React from "react";
import {withRouter} from 'react-router-dom'
import './style.scss'
import {Link} from "react-router-dom";
import arrowBack from '../../assets/svg/arrow-back.svg'

const Header = ({history}) => {

    return (
        <div className='container-header'>
            <div className='header-left'>
                <img src={arrowBack} alt='arrow-back'/>
                <div className="link">
                    <Link to="#" className="back p2" onClick={() => history.goBack()}>назад</Link>
                </div>
            </div>
            <div className='header-right'>
                <div className="link" >
                    <Link to="#" className="exit p2">Выйти</Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)