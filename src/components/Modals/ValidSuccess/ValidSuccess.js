import React from 'react';
import successSVG from '../../../assets/svg/check.svg'
import './style.scss'

const ValidSuccess = ({successMessage}) => {

    return (
        <React.Fragment>
            <div className="valid-success-modal-wrapper">
                <div className="valid-success-modal">
                    <div className="icon">
                        <img src={successSVG} alt='success'/>
                    </div>
                    <span className="text-error">{successMessage}</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ValidSuccess