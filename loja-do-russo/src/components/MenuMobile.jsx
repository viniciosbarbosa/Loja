import React from 'react'

import imgMenu from "../assets/menu.svg"

import "../css/MenuMobile.css"

const MenuMobile = ({isMenuActive , toggleActiveClass}) => {
    const navBarClasses = `MenuMobile ${isMenuActive ? 'active' : ''}`;

  return (
    <div className={navBarClasses}>
        <button className='menu_btn' onClick={toggleActiveClass}>
            <img className="menu__mobile__tela" srcSet={imgMenu} />
          </button>
    </div>
  )
}

export default MenuMobile