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
                            <Route path='/login' component={LoginPage} exact/>
                            <Route path='/login-verification' component={LoginVerificationPage} exact/>
                            <Route path='/pokemons' component={PokemonsPage} exact/>
                            <Route path='/pokemon' component={PokemonPage} exact/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
