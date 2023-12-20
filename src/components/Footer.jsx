import React from 'react';
import Facebook from '../../assets/Facebook.svg'

const Footer = () => {
  return (
    <div className="footer">
      <h4>Call us</h4>
      <a className="test" href='tel:07777777777'>07777777777</a>
      <h4>Email us</h4>
      <p>M.greatnorthgardens@gmail.com</p>
      <h4>Follow us</h4>
      <a href='https://www.facebook.com/profile.php?id=61553697509926' aria-label='facebook'><Facebook /></a>
      
    </div>
  );
};

export default Footer;
