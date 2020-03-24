import React from 'react';
import HeaderMenu from './../Components/Header/HeaderMenu'
import LeftMenu from './../Components/Header/LeftMenu'
import RigthMenu from './../Components/Header/RigthMenu'
import MainImg from './../Components/Header/MainImg'
import './Header.scss';

const Header = () => {
    return (
        <header id='header'>
            <HeaderMenu />
            <div className='header-row'>
            <LeftMenu />
            <RigthMenu />
            <MainImg />
            </div>
        </header>
    );
}

export default Header;