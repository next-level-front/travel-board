import React from 'react';
import './css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img class="next-level logo"
          src={process.env.PUBLIC_URL + '/logo.png'} alt="로고 이미지" />
      </div>
      <button className="btn">게시판으로 이동</button>
    </header>
  );
}

export default Header