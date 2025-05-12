import React from 'react';
import ButtonUI from './UI/button/ButtonUI';
import PostSevice from '../API/PostService';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__link'>
                <a href='/'>About</a>
                <a href='/posts'>Posts</a>
            </div>
        </div>
    );
};

export default NavBar;