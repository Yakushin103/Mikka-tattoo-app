import React from 'react';
import HeaderMenu from './../Components/Header/HeaderMenu'
import LeftMenu from './../Components/Header/LeftMenu'
import RigthMenu from './../Components/Header/RigthMenu'
import MainImg from './../Components/Header/MainImg'
import './Header.scss';

const Header = ({theme, setTheme}) => {
    return (
        <header id='header' className='black-theme'>
            <div className={ theme ? 'black' : 'white' }>
            <HeaderMenu />
            <div className='header-row'>
            <LeftMenu
            theme={theme}
            setTheme={setTheme}
            />
            <RigthMenu />
            <MainImg />
            </div>
            </div>
        </header>
    );
}

export default Header;