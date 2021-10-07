import React, { useState } from "react";
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';
function Header() {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
    <>
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='#' className='logo'>
                <img src={logo} alt='' />
            </Link>
            <input type="checkbox" className="menu-btn" id="menu-btn"/>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon">
                </span>
            </label>
            <ul className="menu">
                <li><Link to="#home">Home</Link></li>
                <li><Link to="#home">About</Link></li>
                <li><Link to="#home">Contact</Link></li>
                <li><Link to="#home">Services</Link></li>
            </ul>
        </nav>
    </>
    );
}

export default Header;