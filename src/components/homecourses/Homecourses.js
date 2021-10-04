import React, { useEffect, useState } from 'react';
import Homecourse from '../homecourse/Homecourse';


const Homecourses = () => {

    const[lang, setLang] = useState([])
useEffect(() =>{
    fetch('./language.JSON')
    .then(res => res.json())
    .then(data => setLang(data))
}, [])


    return (
        <div>
            <h1>Our Courses</h1>
        <div className="homecourses-container">
            {
                lang.map(course => {
                    if(course.key < 7)
                        return <Homecourse
                        key = {course.key}
                        course = {course}
                        ></Homecourse>
                    return ' '
                })
            }
</div>
        </div>
    );
};

export default Homecourses;