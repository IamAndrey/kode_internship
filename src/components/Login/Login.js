import React, {useState, useEffect, Fragment} from "react";
import {useSelector, useDispatch} from "react-redux";
import {withRouter} from "react-router-dom";
import {login as entry} from "../../redux/actions/authActions";
import {setError, clearError} from "../../redux/actions/errorActions";
import {setSuccess} from "../../redux/actions/successActions";
import './login.scss'
import look from '../../assets/svg/look-pass.svg'
import {generateCode, lookPass} from "../../tools/lookPass";
import Spinner from "../Loader/Spinner/Spinner";
import ValidError from "../Modals/ValidError/ValidError";
import ValidSuccess from "../Modals/ValidSuccess/ValidSuccess";

const Login = ({history}) => {

    const _USER_LOGIN = 'kode@kode.ru';
    const _USER_PASSWORD = 'Enk0deng';
    const _ERROR_MESSAGE = 'Ваш логин или пароль не совпадают.'

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const {authenticated, loading, error} = useSelector(
        ({auth: {authenticated}, ui: {loading}, error: {error}}) =>
            ({authenticated, loading, error})
    )
    const dispatch = useDispatch()

    const handleLogin = (event) => {
        event.preventDefault()
        if (_USER_LOGIN === login && _USER_PASSWORD === password) {
            setSuccess(generateCode())(dispatch)
            entry()(dispatch)
        } else {
            setError(_ERROR_MESSAGE)(dispatch)
        }
    }

    useEffect(() => {
        if (authenticated) {
            history.push('/login-verification')
        }
    })

    return (
        <Fragment>
            <div className="login-page container-login">
                <h2>Вход в профиль</h2>
                <div className="input-item">
                    <form onSubmit={handleLogin}>
                        <div className="content-input">
                            <div className="input-wrapper">
                                <label className="headline">Логин</label>
                                <input className="login input-info" onChange={(event) => {
                                    setLogin(event.target.value)
                                }}
                                       value={login}
                                       name="login" placeholder="Введите логин"
                                       type="login" required minLength={3}/>
                            </div>
                            <div className="input-wrapper">
                                <label className="headline">Пароль</label>
                                <input className="password input-info" onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                                       value={password}
                                       name="password" placeholder="Введите пароль"
                                       type="password" required minLength={6}/>

                                <button onClick={lookPass} type="button" className="look-pass"
                                        data-for="look-pass" data-delay-show="200" data-tip="Показать пароль">
                                    <img src={look} alt='icon'/>
                                </button>
                            </div>
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? <Spinner /> : 'Войти'}
                        </button>
                    </form>
                </div>
            </div>

            <ValidSuccess successMessage={`Данные для входа: Логин - ${_USER_LOGIN}, Пароль - ${_USER_PASSWORD}`} />
            {error.message ? <ValidError clear={() => clearError()(dispatch)} errorMessage={error.message}/> : null}
        </Fragment>
    )
}

export default withRouter(Login)