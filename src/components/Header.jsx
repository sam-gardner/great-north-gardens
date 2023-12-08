import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <nav>
      <h1>Great North Gardens</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
