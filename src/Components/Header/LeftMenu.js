import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

const LeftMenu = () => {
    const handleClick = (e) => {
        // let e =  React.MouseEvent<HTMLElement>
        // let link = {
        //   title: React.ReactNode,
        //   href: string
        // }
        e.preventDefault();
    };

    return (
        
            <Anchor 
            style={{ background: 'none' }}
            showInkInFixed={true}
             affix={true} 
             onClick={handleClick} 
             className='left-menu'>
              <Link href="#header" title="Главная" />
              <Link href="#carousel" title="Работы" />
              <Link href="#about" title="Обо мне" />
              <Link href="#local" title="Студия" />
            </Anchor>
          )
    

}

export default LeftMenu;


