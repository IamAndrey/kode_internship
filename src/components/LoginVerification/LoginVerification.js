import React, {Fragment, useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {clearSuccess} from "../../redux/actions/successActions";
import {verify, logout} from "../../redux/actions/authActions";
import {setError, clearError} from "../../redux/actions/errorActions";
import './style.scss'
import Spinner from "../Loader/Spinner/Spinner";
import ValidError from "../Modals/ValidError/ValidError";
import ValidSuccess from "../Modals/ValidSuccess/ValidSuccess";

const LoginVerification = ({history}) => {

    const _ERROR_MESSAGE = 'Вы ввели не верный код.'
    const _SUCCESS_MESSAGE = 'Ваш код - '
    const [code, setCode] = useState('')

    const {loading, authenticated, verified, success, error} = useSelector(
        ({ui: {loading}, auth: {authenticated, verified}, success: {success}, error: {error}}) =>
            ({loading, authenticated, verified, success, error})
    )
    const dispatch = useDispatch()

    useEffect(() => {
        if (authenticated && verified) {
            history.push('/pokemons')
        } else if (!authenticated) {
            history.push('/login')
        }
    })

    const handleVerify = (event) => {
        event.preventDefault()
        if (code === success.code) {
            verify()(dispatch)
            clearSuccess()(dispatch)
        } else {
            setError(_ERROR_MESSAGE)(dispatch)
        }
    }

    return (
        <Fragment>
            <div className="login-verification-page container-login-verification">
                <h2>Подтвердите вход</h2>
                <div className="input-item">
                    <form onSubmit={handleVerify}>
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
                    <div className="link" onClick={() => logout()(dispatch)}>
                        <Link to="/login" className="back p2">Назад</Link>
                    </div>
                </div>
            </div>

            {success.code ? <ValidSuccess successMessage={_SUCCESS_MESSAGE + success.code} /> : null }
            {error.message ? <ValidError clear={() => clearError()(dispatch)} errorMessage={_ERROR_MESSAGE} /> : null }
        </Fragment>
    )
}

export default withRouter(LoginVerification)