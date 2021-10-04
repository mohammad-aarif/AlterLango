import { Button } from '@mui/material';
import React from 'react';
import './course.css'
const Course = (props) => {
    console.log(props)
    const {name, description, flag, learner} = props.course;
    return (
        <div className="course">
            <div className="course-card">
                <div className="course-info">
                    <h3>{name}</h3>
                    <p>{learner}M Active Learner</p>
                    <small>{description}</small>
                    <Button className="learn-more" variant="contained">Learn More</Button>
                </div>
                <div className="course-image">
                    <img src={flag} alt="" />
                
                 </div>
            </div>
        </div>
    );
};

export default Course;