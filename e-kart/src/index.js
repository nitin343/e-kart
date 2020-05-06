import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, link, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/homepage/hats/ShopHats.component";

const routing = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
