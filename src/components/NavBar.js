import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
               <Link to="/"><span>🏠</span>
                    <span className="siteName">Emily Chiu</span>
               </Link>
            </div>
            <div className="navItems">
                <Link to="/about">
                    <span className="navItem">About</span>
                </Link>
                <Link to="/contact">
                    <span className="navItem">Contact</span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;