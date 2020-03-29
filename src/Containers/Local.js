import React from 'react';
import LocalMap from './../Components/Local/LocalMap'
import LocalContent from './../Components/Local/LocalContent'
import './Local.scss';

const Local = ({theme}) => {
    return (
        <div id='local'>
            <div className={theme ? 'black' : 'white'}>
            <h2>
                #My_location
            </h2>
            <div className='local-items'>
                <LocalMap />
                <LocalContent />
            </div>
            </div>
        </div>
    );
}

export default Local;