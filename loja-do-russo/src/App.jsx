import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar'

import Footer from './components/Footer'

import Home from './routes/Home';

import './App.css'
import MenuMobile from './components/MenuMobile'

function App() {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleActiveClass = () => {
    console.log("passou")
    setIsMenuActive(!isMenuActive);
  };





  return (
    <div className='app'>
      <NavBar isMenuActive={isMenuActive} closeMenu={toggleActiveClass} />
      <MenuMobile isMenuActive={isMenuActive} toggleActiveClass={toggleActiveClass}/>


      <Outlet/>
   
    </div>

  )
}

export default App
