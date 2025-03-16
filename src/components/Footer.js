import React from 'react';
import { Box, Container, Typography, IconButton, Link, Grid, Divider, useTheme, useMediaQuery, Button, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowUpwardIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#0a0e14' : '#f0f0f0',
        color: theme.palette.text.secondary,
        position: 'relative',
        overflow: 'hidden',
        pt: 6,
        pb: 4
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: theme.palette.mode === 'dark' ? 0.03 : 0.05,
          backgroundImage: theme.palette.mode === 'dark'
            ? 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          zIndex: 0
        }}
      />

      {/* Wave divider at top */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          transform: 'rotate(180deg)',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: 'relative',
            display: 'block',
            width: 'calc(100% + 1.3px)',
            height: '40px',
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill={theme.palette.mode === 'dark' ? '#0a0e14' : '#f0f0f0'}
          />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <Box>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #3498db 0%, #2ecc71 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                  mb: 1
                }}
              >
                Abdoulaye Saliou SECK
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, maxWidth: 400 }}>
                Ingénieur Full Stack expérimenté, spécialisé dans le développement d'applications mobiles et web innovantes.
              </Typography>

              {/* Desktop social links */}
              {!isMobile && (
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/abdoulaye-saliou-seck-b2147515b/"
                    target="_blank"
                    sx={{
                      color: theme.palette.text.secondary,
                      '&:hover': {
                        color: '#0077b5',
                        transform: 'translateY(-3px)'
                      },
                      transition: 'all 0.3s'
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="mailto:saliouwillbesomeone@gmail.com"
                    sx={{
                      color: theme.palette.text.secondary,
                      '&:hover': {
                        color: '#d44638',
                        transform: 'translateY(-3px)'
                      },
                      transition: 'all 0.3s'
                    }}
                  >
                    <EmailIcon />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="#"
                    target="_blank"
                    sx={{
                      color: theme.palette.text.secondary,
                      '&:hover': {
                        color: theme.palette.mode === 'dark' ? '#f5f5f5' : '#333333',
                        transform: 'translateY(-3px)'
                      },
                      transition: 'all 0.3s'
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Stack>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: theme.palette.text.primary }}>
                Sections
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  <Link
                    href="#"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: 'none',
                      display: 'block',
                      mb: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    Accueil
                  </Link>
                  <Link
                    href="#expertise"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: 'none',
                      display: 'block',
                      mb: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    Expertise
                  </Link>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Link
                    href="#experience"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: 'none',
                      display: 'block',
                      mb: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    Expérience
                  </Link>
                  <Link
                    href="#projects"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: 'none',
                      display: 'block',
                      mb: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    Projets
                  </Link>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Link
                    href="#education"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: 'none',
                      display: 'block',
                      mb: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    Formation
                  </Link>
                  <Link
                    href="#contact"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: 'none',
                      display: 'block',
                      mb: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    Contact
                  </Link>
                </Grid>
              </Grid>

              {/* Mobile social links */}
              {isMobile && (
                <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/abdoulaye-saliou-seck-b2147515b/"
                    target="_blank"
                    sx={{
                      color: theme.palette.text.secondary,
                      '&:hover': { color: '#0077b5' },
                      transition: 'color 0.3s'
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="mailto:saliouwillbesomeone@gmail.com"
                    sx={{
                      color: theme.palette.text.secondary,
                      '&:hover': { color: '#d44638' },
                      transition: 'color 0.3s'
                    }}
                  >
                    <EmailIcon />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="#"
                    target="_blank"
                    sx={{
                      color: theme.palette.text.secondary,
                      '&:hover': { color: theme.palette.mode === 'dark' ? '#f5f5f5' : '#333333' },
                      transition: 'color 0.3s'
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Stack>
              )}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)' }}>
            © {currentYear} Abdoulaye Saliou SECK | Tous droits réservés
          </Typography>

          <Button
            onClick={scrollToTop}
            startIcon={<ArrowUpwardIcon />}
            sx={{
              backgroundColor: 'rgba(52, 152, 219, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                transform: 'translateY(-3px)'
              },
              color: theme.palette.primary.main,
              transition: 'all 0.3s',
              px: 2,
              py: 1,
              fontSize: '0.875rem',
              borderRadius: '20px'
            }}
          >
            Retour en haut
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
