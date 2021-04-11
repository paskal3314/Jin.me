import React, { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import WorldMap from './components/WorldMap/WorldMap';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import './App.css';

import { PortfolioProvider } from './context/context';
import { projectsData, experienceData } from './mock/data';

function App() {
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bgCountry, setBgCountry] = useState("");

  useEffect(() => {
    setProjects([...projectsData ]);
    setExperience([...experienceData ]);
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      if (window.innerWidth > 950) { //769
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    };

    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);

  return (
    <PortfolioProvider value={{ projects, experience }}>  
      <Hero isDesktop={isDesktop} />
      <About isDesktop={isDesktop} />
      <WorldMap isDesktop={isDesktop} onSelect={setBgCountry} />
      <Projects isDesktop={isDesktop} bgCountry={bgCountry}  />
      <Experience isDesktop={isDesktop} bgCountry={bgCountry} />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
