import React from "react";
import Footer from "./component/footer/footer.component";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";


import { BrowserRouter, Route, link, Switch } from "react-router-dom";
import Shop from "./pages/shop/shopPage";
import Nav from "./component/navBar/nav.component";
import Header from "./component/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/signIn" exact component={SignInAndSignUp} />
        </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
