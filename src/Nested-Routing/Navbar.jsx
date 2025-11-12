import React, { useState } from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <nav>
            {/* logo */}
            <NavLink to='/' className='logo'>  My Website  </NavLink>
            {/* Hamburger  */}
            <div className='menu-icon'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* Nav Links  */}
            <ul className={menuOpen ? "show" : ""}>
                {/* Home */}
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "Active" : "")}
                        onClick={() => setMenuOpen(false)}>
                        Home
                    </NavLink>
                </li>
                {/* About */}
                <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? "Active" : "")}
                        onClick={() => setMenuOpen(false)}>
                        About
                    </NavLink>
                </li>
                {/* Services  */}
                <li>
                    <NavLink to='/services' className={({ isActive }) => (isActive ? "Active" : "")}
                        onClick={() => setMenuOpen(false)}>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contactus' className={({ isActive }) => (isActive ? "Active" : "")}
                        onClick={() => setMenuOpen(false)}>
                        Contact Us
                    </NavLink>
                </li>
               

            </ul>
        </nav>
        
    )
}

export default Navbar
