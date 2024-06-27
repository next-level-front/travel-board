import React from "react";
import "./css/Header.css";
import logo from "./../static/images/logo.png";

function Header({ handleView }) {
  return (
    <header className="header">
      <div className="logo" onClick={() => handleView("home")}>
        <img class="next-level logo" src={logo} alt="로고 이미지" />
      </div>
      <button onClick={() => handleView("home")} className="btn">
        게시판으로 이동
      </button>
    </header>
  );
}

export default Header;
