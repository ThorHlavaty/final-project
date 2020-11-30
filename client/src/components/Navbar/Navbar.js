import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '../Button/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'
import { MdTrackChanges } from "react-icons/md";



export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 560) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
    
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <IconContext.Provider value={{ color: '#000' }}>
          <nav className='navbar'>
            <div className='navbar-container container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {<MdTrackChanges/>} NADA
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li className='nav-btn'>
                  {button ? (
                    <Link to='/users/register' className='btn-link'>
                      <Button buttonStyle='btn--primary'>SIGN UP</Button>
                    </Link>
                  ) : (
                    <Link to='/users/register' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                      >
                        Sign Up
                      </Button>
                    </Link>
                  )}
                </li>
                <li className='nav-btn'>
                  {button ? (
                    <Link to='/users/login' className='btn-link'>
                      <Button 
                      buttonStyle='btn--outline'
                      
                      >
                        Sign In
                      </Button>
                    </Link>
                  ) : (
                    <Link to='/users/login' className='btn-link'>
                      <Button
                        buttonStyle='btn--primary'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                      >
                        SIGN IN
                      </Button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </IconContext.Provider>
      </>
    );
  }