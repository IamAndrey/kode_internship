import React from 'react';
import './app.scss'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from "../Header/Header";
import LoginPage from "../../pages/LoginPage";
import LoginVerificationPage from "../../pages/LoginVerificationPage";
import PokemonsPage from "../../pages/PokemonsPage";
import PokemonPage from "../../pages/PokemonPage";

import {store, persistor} from "../../redux/store";
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import AuthRoute from "../Auth/AuthRoute";
import Error_404 from "../Errors/404";
import HomePage from "../../pages/HomePage";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <header>
                        <Header/>
                    </header>
                    <div className='container'>
                        <Switch>
                            <Route path='/' component={HomePage} exact/>
                            <Route path='/login' component={LoginPage} exact/>
                            <Route path='/login-verification' component={LoginVerificationPage} exact/>
                            <AuthRoute path='/pokemons' component={PokemonsPage} exact/>
                            <AuthRoute path='/pokemons/:id' component={PokemonPage} exact/>
                            <Route component={Error_404} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
