import React from "react";
import "./header.style.scss";
import { Link, Redirect } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const ColoredLine = () => <hr className="line" />;

const Header = ({ User }) => (
  <div>
    <div className="header">
      <Link className="logo-conatiner" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          Contact US
        </Link>
      
        {User ? (
          <div  className="option" onClick={() => auth.signOut()} >
        Sign Out 
           </div> 
  
        ) : (
          <Link className='option' to='/signIn'>Sign In </Link>
        )}


   
      </div>
    </div>
    <ColoredLine color="red" />
  </div>
);

const mapStateToProps = state => ({
       User: state.user.User
})

export default connect(mapStateToProps, null)(Header);
