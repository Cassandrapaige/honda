import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";
import Homepage from "./pages/homepage.page";
import Navbar from "./components/navbar/navbar.component";
import ShoppingCart from "./components/shopping-cart/shopping-cart.component";
import Footer from "./components/footer/footer.component";

import useScroll from "./hooks/useScroll";

import { AppStateProvider } from "./providers/app.provider";

const App = () => {
  const scrollY = useScroll();

  useEffect(() => {
    axios
      .get(
        `http://api.exchangeratesapi.io/v1/latest?access_key=81d619c479cae2d306db105373d60153&symbols=USD,GBP,EUR,CAD`
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <AppStateProvider>
      <BrowserRouter>
        <div className='App'>
          <Navbar
            active={scrollY === null || scrollY > 200 ? "true" : undefined}
          />
          <ShoppingCart />
          <Switch>
            <Route exact path='/' component={Homepage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </AppStateProvider>
  );
};

export default App;
