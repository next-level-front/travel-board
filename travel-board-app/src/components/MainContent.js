import React, { useState } from 'react';
import './css/MainContent.css';

function MainContent() {
  const [view, setView] = useState('home');

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="content-area">
            <div className="rectangle"></div>
          </div>
        );
      case 'scroll':
        return <div className="scroll-view">Scroll View</div>;
      case 'create':
        return <div className="create-view">Create View</div>;
      case 'update':
        return <div className="update-view">Update View</div>;
      default:
        return (
          <div className="content-area">
            <div className="rectangle"></div>
          </div>
        );
    }
  };

  return (
    <div className="main-content">
      <button className="btn1" onClick={() => setView('create')}>글쓰기</button>
      {renderContent()}
      <button className="btn2" onClick={() => setView('scroll')}>무한스크롤</button>
      <button className="btn" onClick={() => setView('update')}>Update</button>
    </div>
  );
}

export default MainContent;
