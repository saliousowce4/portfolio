import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import LanguagesSection from './components/LanguagesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
  Fade,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Create the base theme
const createAppTheme = (mode) => {
  let theme = createTheme({
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 800,
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.5rem',
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.75rem',
      },
      h5: {
        fontSize: '1.25rem',
      },
      h6: {
        fontSize: '1rem',
      },
      body1: {
        fontSize: '0.95rem',
      },
      body2: {
        fontSize: '0.875rem',
      },
    },
    palette: {
      mode: mode,
      primary: {
        main: '#3498db',
        light: '#64b5f6',
        dark: '#1976d2',
      },
      secondary: {
        main: '#2ecc71',
        light: '#4caf50',
        dark: '#1b5e20',
      },
      background: {
        default: mode === 'dark' ? '#0d1117' : '#f5f5f5',
        paper: mode === 'dark' ? '#1a202c' : '#ffffff',
        gradient: mode === 'dark'
          ? 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
      },
      text: {
        primary: mode === 'dark' ? '#f5f5f5' : '#333333',
        secondary: mode === 'dark' ? '#b0b0b0' : '#666666',
        accent: '#3498db',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
            padding: '8px 16px',
          },
          contained: {
            background: 'linear-gradient(90deg, #3498db 0%, #2ecc71 100%)',
            '&:hover': {
              background: 'linear-gradient(90deg, #2980b9 0%, #27ae60 100%)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: mode === 'dark'
              ? '0 4px 20px rgba(0,0,0,0.2)'
              : '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: mode === 'dark'
                ? '0 10px 30px rgba(0,0,0,0.4)'
                : '0 10px 30px rgba(0,0,0,0.15)',
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: mode === 'dark'
              ? '0 4px 20px rgba(0,0,0,0.3)'
              : '0 4px 20px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
            backgroundColor: mode === 'dark'
              ? 'rgba(26, 32, 44, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
          }
        }
      }
    },
  });

  // Apply responsive font sizes
  theme = responsiveFontSizes(theme);
  return theme;
};

// Navigation items
const navItems = [
  { label: 'Accueil', href: '#' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Formation', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isMobile = useMediaQuery('(max-width:960px)');

  const theme = createAppTheme(darkMode ? 'dark' : 'light');

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button when scrolled down
      setShowScrollTop(window.scrollY > 400);

      // Find active section for nav highlighting
      const sections = document.querySelectorAll('[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const drawer = (
    <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            component="a"
            href={item.href}
            sx={{
              color: activeSection === item.href.replace('#', '') ? theme.palette.primary.main : 'inherit',
              fontWeight: activeSection === item.href.replace('#', '') ? 700 : 400,
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Desktop Navigation */}
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          transition: 'all 0.3s',
          height: isMobile ? '60px' : '80px',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1000,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(90deg, #3498db 0%, #2ecc71 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              Abdoulaye Saliou
            </Typography>

            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    href={item.href}
                    sx={{
                      mx: 1,
                      color: activeSection === item.href.replace('#', '') ? theme.palette.primary.main : theme.palette.text.primary,
                      fontWeight: activeSection === item.href.replace('#', '') ? 700 : 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: activeSection === item.href.replace('#', '') ? '100%' : '0%',
                        height: '2px',
                        backgroundColor: theme.palette.primary.main,
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <IconButton
                  onClick={toggleDarkMode}
                  color="inherit"
                  sx={{ ml: 2 }}
                >
                  {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box sx={{ pt: isMobile ? '60px' : '80px' }}>
        <HeroSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <LanguagesSection />
        <ContactSection />
        <Footer />
      </Box>

      {/* Scroll to top button */}
      <Fade in={showScrollTop}>
        <Box
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            zIndex: 999,
            p: 1,
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: '50%',
            width: 50,
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 4,
            cursor: 'pointer',
            transition: 'all 0.3s',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: 6,
            }
          }}
        >
          <KeyboardArrowUpIcon fontSize="medium" />
        </Box>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
