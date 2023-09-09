import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLanguage } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    return (
      <section className="h-wrapper">
          <div className="flexCenter paddings innerWidth  h-container">

            <img src= "./logo.png" alt="logo" width={100} />
               <div className ="flexCenter h-menu">
              <a href=""> HOME</a>
              <a href=""> BUY</a>
              <a href=""> SELL</a>
              <a href=""> FINANCE</a>
              <a href=""> INSURE</a>
              <button className="button">
              <a href=""> CONTACT US</a>
              </button>
              <span className="icon">
            <FontAwesomeIcon icon={faUser} /> {/* Signup icon */}
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faLanguage} /> {/* Language preference icon */}
          </span>
               </div>
          </div>
      </section> 

    );
};

export default Header;