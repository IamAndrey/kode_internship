import React from "react";
import './style.scss'

const Attack = ({attack}) => {

    return (
        <div className='pokemon-attribute'>
            <div className='attribute-item'>
                {attack.name ?
                    <div className='item'>
                        Attack:
                        <span className='name'>{attack.name}</span>
                    </div> : null}
                {attack.damage ?
                    <div className='item'>
                        Damage:
                        <span className='damage'>{attack.damage}</span>
                    </div> : null}
                {attack.cost ?
                    <div className='item'>
                        Cost:
                        <span className='cost'>{attack.cost.length}</span>
                    </div> : null}
            </div>
            <div className='attribute-text'>
                <p className='p2'>{attack.text}</p>
            </div>
        </div>
    )
}

export default Attack