import React, {useEffect} from 'react';
import closeSVG from '../../../assets/svg/close.svg'
import errorSVG from '../../../assets/svg/error.svg'
import './style.scss'

const ValidError = ({clear, errorMessage}) => {

    useEffect(() => {
        setTimeout(() => {
            if (clear) clear()
        }, 3000)
    })

    return (
        <React.Fragment>
            <div className="valid-errors-modal-wrapper">
                <div className="valid-errors-modal">
                    <div className="icon">
                        <img src={errorSVG} alt='error'/>
                    </div>
                    <span className="text-error">{errorMessage}</span>
                    <button onClick={() => {if (clear) clear()}}>
                        <img src={closeSVG} alt='close'/>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ValidError
