import React from "react";
import Footer from './component/footer/footer.component';
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Nav from "./component/nav.component.jsx/nav.component";
import { Route,Switch,  } from "react-router-dom";





function App() {
  return (
    <div>
   
    <Nav />
    <HomePage />
    <Footer />
    
    </div>
  );
}

export default App;
