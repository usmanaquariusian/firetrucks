// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SecondSection from './components/SecondSection';

function App() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <Header />
      <HeroSection />
      <SecondSection />
    </div>
  );
}

export default App;
