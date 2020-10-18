import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import LoginPage from "../../pages/LoginPage";
import LoginVerificationPage from "../../pages/LoginVerificationPage";
import PokemonsPage from "../../pages/PokemonsPage";
import Pokemon from "../Pokemon/Pokemon";
import './app.scss'

function App() {
  return (
      <BrowserRouter>
          <div className='app'>
              <header>
                  <Header />
              </header>
              <section>
                  <div className='container'>
                      <Switch>
                          <Route path='/login' component={LoginPage} exact/>
                          <Route path='/login-verification' component={LoginVerificationPage} exact/>
                          <Route path='/pokemons' component={PokemonsPage} exact/>
                          <Route path='/pokemon' component={Pokemon} exact/>
                      </Switch>
                  </div>
              </section>
          </div>
      </BrowserRouter>
  );
}

export default App;
