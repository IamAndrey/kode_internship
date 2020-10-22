import React, {useState} from "react";
import './style.scss'

const Pokemon = (props) => {

    const _ID = props.match.params.id;

    return (
        <div className='container-content pokemon-page'>
            <div className='column-one'>

            </div>
            <div className='column-two'>

            </div>
        </div>
    )
}

export default Pokemon