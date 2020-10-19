import React, {Fragment, useState} from "react";
import {withRouter} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import './style.scss'
import Spinner from "../Loader/Spinner/Spinner";

const LoginVerification = () => {

    const [code, setCode] = useState('')

    const {loading} = useSelector(
        ({ui: {loading}}) => ({loading})
    )
    const dispatch = useDispatch()

    return (
        <Fragment>
            <div className="login-verification-page container-login-verification">
                <h2>Подтвердите вход</h2>
                <div className="input-item">
                    <form onSubmit={() => {}}>
                        <div className="content-input">
                            <div className="input-wrapper">
                                <label className="headline">Код</label>
                                <input className="code input-info" onChange={(event) => setCode(event.target.value)}
                                       value={code}
                                       name="code" placeholder="Введите код из смс"
                                       type="text" required minLength={6}/>
                            </div>
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? <Spinner /> : 'Подтвердить'}
                        </button>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default withRouter(LoginVerification)