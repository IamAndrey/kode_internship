import React, {useState} from "react";
import './login.scss'

const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-page container-login">
            <h2>Вход в профиль</h2>
            <div className="input-item">
                <form onSubmit={() => {}}>
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

                            <button onClick={() => {
                            }} type="button" className="look-pass"
                                    data-for="look-pass" data-delay-show="200" data-tip="Показать пароль">
                            </button>
                        </div>
                    </div>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>

    )
}

export default Login