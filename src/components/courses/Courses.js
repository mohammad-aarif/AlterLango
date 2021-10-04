import React, { useState, useEffect } from 'react';
import Course from '../course/Course';
import './courses.css'

const Courses = () => {
    const[lang, setLang] = useState([]);

    useEffect(() =>{
        fetch('./language.JSON')
        .then(res => res.json())
        .then(data => setLang(data))
    }, [])
    return (
        <div>
            <h1>Our Courses</h1>
            <div className="courses-container">
            {
                lang.map(course => <Course
                key = {course.key}
                course = {course}
                ></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;