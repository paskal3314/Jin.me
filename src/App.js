import React, { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import WorldMap from './components/WorldMap/WorldMap';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bgCountry, setBgCountry] = useState("");
  
  useEffect(() => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
  }, []);

  return (
    <div>  
      <Hero isDesktop={isDesktop} />
      <About isDesktop={isDesktop} />
      <WorldMap isDesktop={isDesktop} onSelect={setBgCountry} />
      <Projects isDesktop={isDesktop} bgCountry={bgCountry} />
      
      {/* <div className="jumbotron" id="korea"/>
      <div className="jumbotron" id="canada"/> */}
    </div>
  );
}

export default App;
