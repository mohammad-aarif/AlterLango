import React from 'react';
import whyusimg from '../../img/whyus.png'
import './whyus.css'
const Whyus = () => {
    return (
        <div className="whyus">
            <div className="why-content">
                <img src={whyusimg} alt="" />
                <div className="whytexts">
                    <h2>The world’s #1 way to learn a language</h2>
                    <p>Learning with AlterLango is fun, and research shows that it works! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.</p>
                </div>
            </div>
        </div>
    );
};

export default Whyus;