import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import LoginPage from "../../pages/LoginPage";
import LoginVerificationPage from "../../pages/LoginVerificationPage";
import PokemonsPage from "../../pages/PokemonsPage";
import './app.scss'
import PokemonPage from "../../pages/PokemonPage";

function App() {
    return (
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
    );
}

export default App;
