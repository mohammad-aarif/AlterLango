import { Button } from '@mui/material';
import React from 'react';
import headerimg from'../../img/header.png'
import './info.css'
const Info = () => {
    return (
        <div className="info">
            <div className="details">
                <h1>Are You looking for a Best way to learn Language?</h1>
                <p>We are here to make easier way to teach you alternative language.</p>
                <Button variant="outlined"> See Courses </Button>
            </div>
            <div className="img">
            <img src={headerimg} alt="" />
            </div>
        </div>
    );
};

export default Info;