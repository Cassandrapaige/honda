import React, {useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import './App.scss';
import Homepage from './pages/homepage.page'
import Navbar from './components/navbar/navbar.component';
import ShoppingCart from './components/shopping-cart/shopping-cart.component'

import useScroll from './hooks/useScroll';

import {AppStateProvider} from './providers/app.provider'

const App = () => {
  const scrollY = useScroll();
  
  useEffect(() => {
    axios.get(`https://api.exchangeratesapi.io/latest?base=CAD&symbols=USD,GBP,EUR`)
    .then(response => console.log(response));
  }, []);

  return (
     <AppStateProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar active = {scrollY > 200}/>
          <ShoppingCart/>
          <Switch>
              <Route exact path = '/' component = { Homepage } />
          </Switch>
        </div>
      </BrowserRouter>
      </AppStateProvider>
  );
}

export default App;
