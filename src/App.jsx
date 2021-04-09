import React, { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import WorldMap from './components/WorldMap/WorldMap';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.css';

import { PortfolioProvider } from './context/context';
import { projectsData } from './mock/data';

function App() {
  const [projects, setProjects] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bgCountry, setBgCountry] = useState("");

  useEffect(() => {
    setProjects([...projectsData ]);
  }, []);
  
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
    <PortfolioProvider value={{ projects }}>  
      <Hero isDesktop={isDesktop} />
      <About isDesktop={isDesktop} />
      <WorldMap isDesktop={isDesktop} onSelect={setBgCountry} />
      <Projects isDesktop={isDesktop} bgCountry={bgCountry} />
    </PortfolioProvider>
  );
}

export default App;
