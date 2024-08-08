// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SecondSection from './components/SecondSection';
import Specs from './components/SpecsTruck'
import Scroll from './components/ScrollVideo'
import './style.css'

function App() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <Header />
      <HeroSection />
      <Scroll/>
      <SecondSection />
      <Specs/>
    </div>
  );
}

export default App;
