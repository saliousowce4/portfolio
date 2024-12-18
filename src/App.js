import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Experience />
        <Education />
        <Skills />
        <Languages />
      </main>
      <Footer />
    </>
  );
}

export default App;
