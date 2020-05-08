import React from 'react';
import './nav.style.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
    
      <nav class="navbar navbar-light ">

      <Link class="navbar-brand" to='/'>
      HomePage
    </Link>

      <Link class="navbar-brand" to='/shop'>
        ShopPage
      </Link>

    </nav>
      
    )
}

export default Nav;