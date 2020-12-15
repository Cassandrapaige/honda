import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss';
import Homepage from './pages/homepage.page'
import Navbar from './components/navbar/navbar.component';
import ShoppingCart from './components/shopping-cart/shopping-cart.component'
import Footer from './components/footer/footer.component';

import useScroll from './hooks/useScroll';

import {AppStateProvider} from './providers/app.provider'

const App = () => {
  const scrollY = useScroll();
  
    return (
     <AppStateProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar active = {scrollY === null || scrollY > 200 ? "true" : "false"}/>
          <ShoppingCart/>
          <Switch>
              <Route exact path = '/' component = { Homepage } />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
      </AppStateProvider>
  );
}

export default App;
