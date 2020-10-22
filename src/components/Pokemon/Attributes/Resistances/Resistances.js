import React from "react";

const Resistances = ({resistance}) => {

    return (
        <div className='attribute-item'>
            {resistance.type ?
                <div className='item'>
                    Type:
                    <span className='name'>{resistance.type}</span>
                </div> : null}
            {resistance.value ?
                <div className='item'>
                    Value:
                    <span className='name'>{resistance.value}</span>
                </div> : null}
        </div>
    )
}

export default Resistances