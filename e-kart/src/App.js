import React from "react";
import Footer from "./component/footer/footer.component";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";


import { BrowserRouter, Route, link, Switch } from "react-router-dom";
import Shop from "./pages/shop/shopPage";
import Nav from "./component/navBar/nav.component";
import Header from "./component/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth  ,createdUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component  {

  constructor() {
    super();
    this.state = {
      User: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createdUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
       this.setState({
         User:{
           id: snapShot.id,
           ...snapShot.data()
         }
       })
       console.log(this.state);
       
      });
      
    }
     this.setState({User: userAuth})
    // createdUserProfileDocument(user)  


      // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <BrowserRouter>
      <Nav />
      <Header User={this.state.User}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/signIn" exact component={SignInAndSignUp} />
        </Switch>
      
      <Footer />
    </BrowserRouter>
  );
  }
}
export default App;
