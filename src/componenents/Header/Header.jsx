import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <p> This is Header</p>
           <div>
           <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to="/profile"> Profile </Link>
            <Link to='/career'> Career</Link>
            <Link to='/login'> Login </Link>
           </div>
        </div>
    );
};

export default Header;