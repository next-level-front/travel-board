import React from 'react';
import './css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <button className="btn">게시판으로 이동</button>
    </header>
  );
}

export default Header