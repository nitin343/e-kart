import React from 'react';
import './hompage.style.scss'

const HomePage = () => (
    <div className='homepage'>
     <div className='directory-menu'>
       <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Hats</h1>
          <span className='subtitle'>shop Now</span>
        </div>
       </div>

       <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Womens</h1>
          <span className='subtitle'>shop Now</span>
        </div>
       </div>

       <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>mens</h1>
          <span className='subtitle'>shop Now</span>
        </div>
       </div>

       

       <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Snekars</h1>
          <span className='subtitle'>shop Now</span>
        </div>
       </div>

       <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Jackets</h1>
          <span className='subtitle'>shop Now</span>
        </div>
       </div>
     </div>
    </div>
)

export default HomePage;