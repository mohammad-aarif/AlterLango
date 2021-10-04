import React from 'react';
import Homecourses from '../homecourses/Homecourses';
import Whyus from '../whyus/Whyus';
import Info from '../info/Info';

const Home = () => {
    return (
        <div>
            <Info></Info>
            <Whyus></Whyus>
            <Homecourses></Homecourses>
        </div>
    );
};

export default Home;