import React from "react";
import Footer from "./component/footer/footer.component";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";


import {  Route, link, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/shop/shopPage";
import Nav from "./component/navBar/nav.component";
import Header from "./component/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth  ,createUserProfileDocument} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setUser } from "./redux/user/user.action";

class App extends React.Component  {



  unsubscribeFromAuth = null

  componentDidMount(){

    const  { setUser} = this.props;

   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
       setUser({
       
           id: snapShot.id,
           ...snapShot.data()
         
       })
      //  console.log(this.state);
       
      });
      
    }
  setUser(userAuth)
    // createUserProfileDocument(snapShot)  


      // console.log(snapShot)
    })
  }

 

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
    <Nav />
    <Header />
    
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" exact component={Shop} />
    <Route path="/signin" exact component={SignInAndSignUp} />
    </Switch>
    <Footer />
    </div>
   
  );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})



export default connect(null , mapDispatchToProps)(App);
