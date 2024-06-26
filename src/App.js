import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;