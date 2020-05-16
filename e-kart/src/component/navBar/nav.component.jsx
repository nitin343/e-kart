import React from 'react';
import './nav.style.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
    
      <nav className="navbar sticky-top navbar-light ">

      <Link className="navbar-brand" to='/'>
      HomePage
    </Link>

      <Link className="navbar-brand" to='/shop'>
        ShopPage
      </Link>

    </nav>
      
    )
}
export default Nav;