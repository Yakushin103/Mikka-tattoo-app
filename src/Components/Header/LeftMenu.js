import React from 'react';
import { Anchor } from 'antd';
import { Switch } from 'antd';

const { Link } = Anchor;

const LeftMenu = ({setTheme, theme}) => {
    const handleClick = (e) => {
        // let e =  React.MouseEvent<HTMLElement>
        // let link = {
        //   title: React.ReactNode,
        //   href: string
        // }
        e.preventDefault();
    };

    const onSetTheme = () => {
      setTheme(!theme)
    } 

    return (

            <Anchor 
            style={{ background: 'none' }}
            showInkInFixed={true}
             affix={true} 
             onClick={handleClick} 
             className='left-menu'>
                <p>{ theme ? '#black' : '#white' }  </p>
                <Switch defaultChecked onChange={onSetTheme} />
              <Link href="#header" title="#Главная" />
              <Link href="#carousel" title="#Работы" />
              <Link href="#about" title="#Обо_мне" />
              <Link href="#local" title="#Студия" />
            </Anchor>
          )
    

}

export default LeftMenu;


