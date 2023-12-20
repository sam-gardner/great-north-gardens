import React from 'react';
import Facebook from '../../assets/Facebook.svg'

const Footer = () => {
  return (
    <div className="footer">
      <h3>Call us</h3>
      <a className="test" href='tel:07777777777'>07777777777</a>
      <h3>Email us</h3>
      <p>M.greatnorthgardens@gmail.com</p>
      <h3>Follow us</h3>
      <a href='https://www.facebook.com/profile.php?id=61553697509926' aria-label='facebook'><Facebook /></a>
      
    </div>
  );
};

export default Footer;
