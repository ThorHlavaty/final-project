import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '../Button/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'




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
        <IconContext.Provider value={{ color: '#08246e' }}>
          <nav className='navbar'>
            <div className='navbar-container container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                NADA
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
                    <Link to='/sign-up' className='btn-link'>
                      <Button buttonStyle='btn--primary'>SIGN UP</Button>
                    </Link>
                  ) : (
                    <Link to='/sign-up' className='btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                      >
                        SIGN UP
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