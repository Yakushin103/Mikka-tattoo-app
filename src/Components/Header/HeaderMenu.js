import React from 'react';

const HeaderMenu = () => {
    return (
        <div className="header">
           <div className="header-logo">
               <h2>Mikka tattoo</h2>
           </div>
           <div className="header-center">
               Тату в Ростове
           </div>
           <div className="header-number">
               <a href='tel: +79888950008'>Набирай: +79888950008</a>
           </div>
        </div>
    );
}

export default HeaderMenu;