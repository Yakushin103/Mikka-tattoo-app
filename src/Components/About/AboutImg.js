import React from 'react';
import img from './../../img/about-pic.jpg'

const AboutImg = () => {
    return (
        <div className='about-img'>
            <img src={img} alt='My photo' />
        </div>
    );
}

export default AboutImg;