import React from 'react';
import './Footer.css';
import github from '../../assets/img/github.png';
import instagram from '../../assets/img/instagram.png';
import linkedIn from '../../assets/img/linkedin.png';
import logo from '../../assets/img/logo.png';
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedIn} alt="" />
        </div>

        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
