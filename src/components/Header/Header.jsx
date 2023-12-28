/* eslint-disable no-unused-vars */
import React from 'react';
import images from './../../../src/images/images/profile.png';
import './Header.css'

const Header = () => {
    return (
        <div>
              <nav className='header'>
            <h2>knowledge cafe</h2>
                
      <div className='nav'>
      <a href="/home">home</a>
                <a href="/more">more</a>
                <a href="/about us">about us</a>
      </div>
                <img src={images} alt="" />
             </nav>
        </div>
    );
};

export default Header;