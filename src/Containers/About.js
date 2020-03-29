import React from 'react';
import AboutImg from './../Components/About/AboutImg'
import AboutContent from './../Components/About/AboutContent'
import './About.scss';

const About = ({theme}) => {
    return (
        <div id='about'>
            <div className={theme ? 'black' : 'white'}>
            <h2>
                #About_me
            </h2>
            <div className='about-items'>
                <AboutImg />
                <AboutContent />
            </div>
            </div>
        </div>
    );
}

export default About;