import React, {useState} from 'react';
import { Link } from 'gatsby';
import Hamburger from 'hamburger-react'
import Menu from './Menu';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <nav>
      <div className="header">
        <h1 className='logo'>Great North Gardens</h1>
        <div className="hamburger">
          <Hamburger toggled={hamburgerOpen} toggle={setHamburgerOpen}/>
        </div>
        {hamburgerOpen && <Menu />}
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
