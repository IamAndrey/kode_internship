import React, {Fragment, useState} from "react";
import {withRouter} from "react-router-dom";
import './style.scss'

const LoginVerification = () => {

    const [code, setCode] = useState('')

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
                                       type="code" required minLength={6}/>
                            </div>
                        </div>
                        <button type="submit" >Подтвердить</button>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default withRouter(LoginVerification)