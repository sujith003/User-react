import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <ul>
                <li className='logo'>
                    <NavLink to="/">Logo</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services">services</NavLink>
                </li>
                <li>
                    <NavLink to="/login">login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar