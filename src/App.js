import React from 'react';
import Skills from './components/Skills';
import Intro from './components/Intro'; 
import Projects from './components/Projects';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Intro /> 
      <Skills />
      <Projects />
      <Timeline />

    </div>
  );
}

export default App;
