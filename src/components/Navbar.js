import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false); 

  const showButton = () => {
    if (window.innerWidth <= 960) {
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
    
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="photo-size" src="https://blog.talenox.com/wp-content/uploads/2014/10/DBS_Bank_Logo.svg_.png"/>
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/investments'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Investments
              </Link>
            </li>

            
          </ul>
          
        </div>
      </nav>
    
  );
}

export default Navbar;