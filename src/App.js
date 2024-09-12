import React from 'react';
import Skills from './components/Skills';
import Hero from './components/Hero'; 
import Projects from './components/Projects';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Hero /> 
      <Skills />
      <Projects />
      <Timeline />

    </div>
  );
}

export default App;
