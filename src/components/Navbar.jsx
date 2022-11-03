import React, { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo2.png'
import {MdOutlineDarkMode} from 'react-icons/md'
import {BsSun} from 'react-icons/bs';
import { ThemeContext, themes } from '../themeContext';

function Navbar() {
  const [click, setClick] = useState(false);
  const [ change, setChanged ] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar" style={{marginTop: '1rem'}}>
        {/* <a href="/" className="navbar-logo Ultrabold" onClick={closeMobileMenu}> */}
          {/* Salaah. */}          
          <img src={Logo} style={{maxWidth: '100%',maxHeight: '100%',display: 'block'}} alt="" onClick = {closeMobileMenu} />
        {/* </a> */}

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className="nav-links" onClick={closeMobileMenu}>
              Gallery{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/company" className="btn nav-links" onClick={closeMobileMenu}>
              Companies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/faq" className="nav-links" onClick={closeMobileMenu}>
              Faq's
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <div style={{cursor: 'pointer'}} onClick={() => {
                setChanged(!change);
                changeTheme(change ? themes.light : themes.dark);
                }}>
                {
                    change ? <BsSun size={25} /> : <MdOutlineDarkMode size={25} /> 
                }
                
            </div>
            )}
          </ThemeContext.Consumer>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

