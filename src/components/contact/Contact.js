import React from 'react';
import contactimage from '../../img/contact.png'
import './contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <img src={contactimage} alt="" />
            <h1>AlterLango</h1>
            <p>123 fake Street, Fake City, New Dhaka, Bangladesh</p>
            <p>hello@example.com</p>
            <p>+123 1122 2313 (9:00AM - 5:00PM)</p>
        </div>
    );
};

export default Contact;