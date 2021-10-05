import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className='menu'>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/learn">Learn</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='logo'>
                <h1><span>Alter</span>Lango</h1>
            </div>
        </div>
    );
};

export default Header;