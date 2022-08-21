import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar--list'>
            <li>
                <Link to='/menu/characters'>Characters</Link>
            </li>
            <li>
                <Link to='/menu/staff'>Staff</Link>
            </li>
            <li>
                <Link to='/menu/houses'>Casa</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar