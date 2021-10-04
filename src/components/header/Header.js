import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className='menu'>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/learn">Learn</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className='logo'>
                <h1><span>Alter</span>Lango</h1>
            </div>
        </div>
    );
};

export default Header;