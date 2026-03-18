
import React, { useState } from 'react';
import Layout from './components/Layout';
import { Section } from './types';
import Home from './sections/Home';
import Appreciation from './sections/Appreciation';
import Exploration from './sections/Exploration';
import Heritage from './sections/Heritage';
import Exhibition from './sections/Exhibition';
import Revolutionary from './sections/Revolutionary';
import Relics from './sections/Relics';
import Snow from './sections/Snow';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  // Simple routing based on section state
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home setSection={setCurrentSection} />;
      case 'appreciation':
        return <Appreciation />;
      case 'exploration':
        return <Exploration />;
      case 'heritage':
        return <Heritage />;
      case 'exhibition':
        return <Exhibition setSection={setCurrentSection} />;
      case 'revolutionary':
        return <Revolutionary />;
      case 'relics':
        return <Relics />;
      case 'snow':
        return <Snow setSection={setCurrentSection} />;
      default:
        return <Home setSection={setCurrentSection} />;
    }
  };

  // 展馆页面全屏沉浸式，不需要导航栏和 footer
  if (currentSection === 'exhibition') {
    return <Exhibition setSection={setCurrentSection} />;
  }

  return (
    <Layout currentSection={currentSection} setSection={setCurrentSection}>
      {renderSection()}
    </Layout>
  );
};

export default App;
