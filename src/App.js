// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';

function App() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <Header />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

export default App;

