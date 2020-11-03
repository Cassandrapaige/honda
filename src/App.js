import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss';
import Homepage from './pages/homepage.page'
import Navbar from './components/navbar/navbar.component';

import useScroll from './hooks/useScroll';

const App = () => {
  const scrollY = useScroll();
  
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar active = {scrollY > 200}/>
          <Switch>
              <Route exact path = '/' component = { Homepage } />
          </Switch>
        </div>
        {/* <div className="loading-screen">
          <div className="loader">
            <img src="http://vignette1.wikia.nocookie.net/logopedia/images/2/21/Honda_3.png/revision/latest?cb=20150110002727" alt="logo"/>
            <span>Loading...</span>
          </div>
        </div> */}
      </BrowserRouter>
  );
}

export default App;
