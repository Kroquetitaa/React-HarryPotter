import React from 'react'
import Navbar from './Navbar/Navbar'
import './Menu.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
        <Navbar />
    </div>
  )
}

export default Menu