import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss';
import Homepage from './pages/homepage.page'
import Navbar from './components/navbar/navbar.component';
import ShoppingCart from './components/shopping-cart/shopping-cart.component'

import useScroll from './hooks/useScroll';

const App = () => {
  const scrollY = useScroll();

  const [isOpen, setIsOpen] = useState(false);

  // prevent body element from scrolling when Cart is open
  const handleClick = () => {
    if(!isOpen) {
      document.body.style.overflow = "hidden";
      setIsOpen(true);
    } else {
      setIsOpen(false);
      document.body.style.overflow = "visible";
    }
  }

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar active = {scrollY > 200} handleClick = {handleClick}/>
          <ShoppingCart handleClick = {handleClick} isOpen = {isOpen}/>
          <Switch>
              <Route exact path = '/' component = { Homepage } />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
