import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className='Header'>
            <span>{props.content.title}</span>
        </div>
    )
}

export default Header