import React from 'react'
import { Link , NavLink} from 'react-router-dom'

import imgMenu from "../assets/menuClose.svg"

import "../css/NavBar.css"

const NavBar = ({isMenuActive , closeMenu}) => {
  
  const navBarClasses = `navBar ${isMenuActive ? 'active' : ''}`;

  return (
    <div className={navBarClasses}>
      <span>Loja do russo</span>

      <button className='menu__btn__nav' onClick={closeMenu}>
        <img className="menu__mobile__nav" srcSet={imgMenu} />
      </button>

      <nav className='navC'>
        <NavLink className='nav-btn' to="" onClick={closeMenu}>Home</NavLink>
        <NavLink className='nav-btn' to="Products" onClick={closeMenu}>Produtos</NavLink>
      </nav>
      
    </div>
  )
}

export default NavBar