import { Button } from '@mui/material';
import React from 'react';

const Homecourse = (props) => {
    const {name, flag, learner} = props.course;
    return (
        <div className="course">
            <div className="course-card">
                <div className="course-info">
                    <h3>{name}</h3>
                    <p>{learner}M Active Learner</p>
                    <Button className="learn-more" variant="outlined">Learn More</Button>
                </div>
                <div className="course-image">
                    <img src={flag} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Homecourse;