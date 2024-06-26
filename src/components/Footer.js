
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="logo">
        <img class="next-level logo"
          src={process.env.PUBLIC_URL + '/logo.png'} alt="로고 이미지" />
      </div>
 
      <br />
      <div className="footer-info">
        <div className="left-info">
          <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy Logo" className="udemy-logo" />
          <p>조장: 강태현</p>
          <p>조원: 권순재, 박가현, 신우성, 이정현, 임승효</p>
        </div>
        <div className="right-info">
          <br /><br /><br /><br /><br />
          <p>&copy; 2024 NEXT LEVEL, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;