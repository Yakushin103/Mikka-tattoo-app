import React from 'react';
import LocalMap from './../Components/Local/LocalMap'
import LocalContent from './../Components/Local/LocalContent'
import './Local.scss';

const Local = () => {
    return (
        <div id='local'>
            <h2>
                Мы находимся
            </h2>
            <div className='local-items'>
                <LocalMap />
                <LocalContent />
            </div>
        </div>
    );
}

export default Local;