import React from 'react';

import TitleSection from './components/TitleSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import HeaderSection from './components/HeaderSection';
import { Element } from 'react-scroll';
import './App.css';

function App() {

  return (
    <div className="full-height">
        <HeaderSection></HeaderSection>
      <div style={{
        height: "93vh"
      }}>
      <TitleSection></TitleSection>
      </div>
      <Element name="about" className="element"/>
      <AboutSection></AboutSection>
      <Element name="skills" className="element"/>

      <SkillsSection></SkillsSection>
    </div >
  );
}

export default App;