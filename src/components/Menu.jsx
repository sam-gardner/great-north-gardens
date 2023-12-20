import React from 'react';
import { Link } from 'gatsby';

const Menu = () => {
  return (
    <div className='hamburgerMenu'>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
    </div>
  );
};

export default Menu;
