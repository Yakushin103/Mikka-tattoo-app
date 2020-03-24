import React from 'react';
import AboutImg from './../Components/About/AboutImg'
import AboutContent from './../Components/About/AboutContent'
import './About.scss';

const About = () => {
    return (
        <div id='about'>
            <h2>
                Обо мне
            </h2>
            <div className='about-items'>
                <AboutImg />
                <AboutContent />
            </div>
        </div>
    );
}

export default About;