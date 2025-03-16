// ExperienceSection.js
import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, Tabs, Tab, useTheme, useMediaQuery, Button } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import GridViewIcon from '@mui/icons-material/GridView';
import TimelineIcon from '@mui/icons-material/Timeline';
import { motion } from 'framer-motion';

// Import subcomponents
import ExperienceCard from './experience/ExperienceCard';
import TimelineView from './experience/TimelineView';
import SkillsShowcase from './experience/SkillsShowcase';
import { experienceData, companiesWithExperiences, companyTabs } from './experience/experienceData';

const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [selectedTab, setSelectedTab] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'timeline'
  const containerRef = useRef(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'timeline' : 'grid');
  };

  // Handle parallax effect for desktop
  useEffect(() => {
    if (!isDesktop || !containerRef.current) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-bg');

      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed');
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  const filteredExperiences = selectedTab === 0
    ? experienceData
    : companiesWithExperiences[companyTabs[selectedTab - 1]];

  return (
    <Box
      py={8}
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0d1117 0%, #1a202c 100%)'
          : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      id="experience"
      ref={containerRef}
    >
      {/* Parallax background elements for desktop */}
      {isDesktop && (
        <>
          <Box
            className="parallax-bg"
            data-speed="0.03"
            sx={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.07) 0%, rgba(52, 152, 219, 0) 70%)',
              zIndex: 0,
            }}
          />

          <Box
            className="parallax-bg"
            data-speed="-0.02"
            sx={{
              position: 'absolute',
              bottom: '15%',
              right: '5%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(46, 204, 113, 0.07) 0%, rgba(46, 204, 113, 0) 70%)',
              zIndex: 0,
            }}
          />

          {/* Grid pattern overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              zIndex: 0,
              opacity: 0.5,
            }}
          />
        </>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: theme.palette.primary.main,
              letterSpacing: 3,
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: '0.7rem', md: '0.75rem' },
            }}
          >
            MON PARCOURS
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Expérience<Box component="span" sx={{ color: theme.palette.primary.main }}> Professionnelle</Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '0.875rem', md: '1rem' },
              px: { xs: 2, md: 0 },
            }}
          >
            Mon parcours dans le développement de solutions digitales innovantes
          </Typography>
        </Box>

        {/* Control section for desktop */}
        {isDesktop && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4
            }}
          >
            {/* Tab navigation to filter by company */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab
                  icon={<BusinessIcon />}
                  iconPosition="start"
                  label="Toutes"
                />
                {companyTabs.map((company, index) => (
                  <Tab
                    key={index}
                    label={company}
                  />
                ))}
              </Tabs>
            </Box>

            {/* View mode toggle */}
            <Button
              startIcon={viewMode === 'grid' ? <TimelineIcon /> : <GridViewIcon />}
              variant="outlined"
              onClick={toggleViewMode}
              sx={{
                borderRadius: '20px',
                px: 2,
                py: 1,
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              {viewMode === 'grid' ? 'Vue Chronologique' : 'Vue Grille'}
            </Button>
          </Box>
        )}

        {/* Mobile tabs */}
        {!isDesktop && (
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3, overflowX: 'auto' }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              textColor="primary"
              indicatorColor="primary"
              sx={{
                minHeight: { xs: '40px', md: '48px' },
                '& .MuiTabs-flexContainer': { gap: { xs: 1, md: 2 } },
              }}
            >
              <Tab
                icon={isMobile ? null : <BusinessIcon />}
                label="Toutes"
                sx={{
                  minHeight: { xs: '40px', md: '48px' },
                  fontSize: { xs: '0.7rem', md: '0.875rem' },
                }}
              />
              {companyTabs.map((company, index) => (
                <Tab
                  key={index}
                  label={company}
                  sx={{
                    minHeight: { xs: '40px', md: '48px' },
                    fontSize: { xs: '0.7rem', md: '0.875rem' },
                  }}
                />
              ))}
            </Tabs>
          </Box>
        )}

        {/* Timeline View for Desktop */}
        {isDesktop && viewMode === 'timeline' && (
          <TimelineView experiences={filteredExperiences} />
        )}

        {/* Grid View */}
        {(isDesktop && viewMode === 'grid') || !isDesktop ? (
          <Grid container spacing={3}>
            {filteredExperiences.map((experience, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ExperienceCard experience={experience} index={index} />
              </Grid>
            ))}
          </Grid>
        ) : null}

        {/* Skills Showcase */}
        <SkillsShowcase />
      </Container>
    </Box>
  );
};

export default ExperienceSection;
