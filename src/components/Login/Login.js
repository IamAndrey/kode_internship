import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {login as entry} from "../../redux/actions/authActions";
import './login.scss'
import lookPass from '../../assets/svg/look-pass.svg'

const Login = ({history}) => {

    const _USER_LOGIN = 'test';
    const _USER_PASSWORD = '123456';

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const authenticated = useSelector(({auth: {authenticated}}) => authenticated)
    const dispatch = useDispatch()

    const handleLogin = (event) => {
        event.preventDefault()
        setTimeout(() => {
            if (_USER_LOGIN === login && _USER_PASSWORD === password) {
                entry()(dispatch)
                history.push('/login-verification')
            }
        }, 2000)
    }

    return (
        <div className="login-page container-login">
            <h2>Вход в профиль</h2>
            <div className="input-item">
                <form onSubmit={handleLogin}>
                    <div className="content-input">
                        <div className="input-wrapper">
                            <label className="headline">Логин</label>
                            <input className="login input-info" onChange={(event) => {setLogin(event.target.value)}}
                                   value={login}
                                   name="login" placeholder="Введите логин"
                                   type="login" required minLength={3}/>
                        </div>
                        <div className="input-wrapper">
                            <label className="headline">Пароль</label>
                            <input className="password input-info" onChange={(event) => {setPassword(event.target.value)}}
                                   value={password}
                                   name="password" placeholder="Введите пароль"
                                   type="password" required minLength={6}/>

                            <button onClick={() => {}} type="button" className="look-pass"
                                    data-for="look-pass" data-delay-show="200" data-tip="Показать пароль">
                                <img src={lookPass} alt='icon' />
                            </button>
                        </div>
                    </div>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>

    )
}

export default withRouter(Login)