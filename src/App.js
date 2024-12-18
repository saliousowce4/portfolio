import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import LanguagesSection from './components/LanguagesSection';
import ContactSection from './components/ContactSection';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: '#121212', paper: '#1e1e1e' },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <EducationSection />
      <LanguagesSection />
      <ContactSection />
    </ThemeProvider>
  );
}

export default App;
