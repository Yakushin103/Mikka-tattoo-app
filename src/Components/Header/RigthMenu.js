import React from 'react';
import { InstagramOutlined } from '@ant-design/icons';


const RigthMenu = () => {
    return (
        <div className="header-social">
            <div className='social-inst'>
            <a href="https://instagram.com/mikka.tattoo?utm_source=ig_profile_share&igshid=ggqeahxjbjgu">
           <InstagramOutlined />
           </a>
           </div>
           <div className='social-vk'>
                <a href="https://vk.com/anna__mikka">VK</a>
            </div>
        </div>
    );
}

export default RigthMenu;