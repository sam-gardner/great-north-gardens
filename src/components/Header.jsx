import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <nav>
      <div>
        <h1 className='logo'>Great North Gardens</h1>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
