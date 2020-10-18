import React, {useState} from "react";
import './login.scss'

const Login = () => {

    return (
        <div className="login-page container-login">
            <h2>Вход в профиль</h2>
            <div className="input-item">
                <form onSubmit={() => {
                }}>
                    <div className="content-input">
                        <div className="input-wrapper">
                            <label className="headline">Логин</label>
                            <input className="login input-info" onChange={() => {
                            }}
                                   name="login" placeholder="Введите логин"
                                   type="login" required minLength={2}/>
                        </div>
                        <div className="input-wrapper">
                            <label className="headline">Пароль</label>
                            <input className="password input-info" onChange={() => {
                            }}
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