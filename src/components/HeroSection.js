import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const containerRef = useRef(null);
  const profileImageRef = useRef(null);
  const textContentRef = useRef(null);

  // Track mouse position for 3D effects on desktop
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // For desktop-only animated background
  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const handleMouseMove = (e) => {
      const container = containerRef.current;
      const profileImage = profileImageRef.current;
      const textContent = textContentRef.current;

      // Update mouse position state
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,  // -0.5 to 0.5
        y: (e.clientY / window.innerHeight) - 0.5  // -0.5 to 0.5
      });

      // Animated gradient backgrounds
      const gradientElements = container.querySelectorAll('.animated-gradient');
      gradientElements.forEach(el => {
        // Calculate a slow movement for the gradient element
        const offsetX = (mousePosition.x) * 40;
        const offsetY = (mousePosition.y) * 40;
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      // 3D parallax for profile image container (desktop only)
      if (profileImage) {
        const rotateY = mousePosition.x * 10;
        const rotateX = -mousePosition.y * 10;
        const translateZ = 40 + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 20;
        profileImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
      }

      // Subtle movement for text content (desktop only)
      if (textContent) {
        const offsetX = mousePosition.x * 15;
        const offsetY = mousePosition.y * 15;
        textContent.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }

      // 3D rotation for tech icons (desktop only)
      const techIcons = container.querySelectorAll('.tech-icon');
      techIcons.forEach(icon => {
        const dataSpeed = parseFloat(icon.getAttribute('data-speed') || '1');
        const rotateY = mousePosition.x * 30 * dataSpeed;
        const rotateX = -mousePosition.y * 30 * dataSpeed;
        const translateZ = 20 + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 30;
        icon.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, mousePosition]);

  // Mobile-specific effects for subtle animation
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    // Add subtle floating animation to profile image on mobile
    const profileImage = document.querySelector('.profile-container');
    if (profileImage) {
      profileImage.style.animation = 'float-mobile 6s ease-in-out infinite';
    }

    // Animate mobile background gradients slightly based on device orientation
    const handleDeviceOrientation = (e) => {
      if (!e.beta || !e.gamma) return;

      const gradientElements = containerRef.current.querySelectorAll('.mobile-gradient');
      const tiltX = Math.min(Math.max(e.beta / 180, -0.15), 0.15); // Limit tilt effect
      const tiltY = Math.min(Math.max(e.gamma / 90, -0.15), 0.15);

      gradientElements.forEach(el => {
        el.style.transform = `translate(${tiltY * 20}px, ${tiltX * 20}px)`;
      });
    };

    // Only add if device orientation is supported
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);

      return () => {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      };
    }
  }, [isMobile]);

  const scrollToNextSection = () => {
    const expertiseSection = document.getElementById('expertise');
    if (expertiseSection) {
      expertiseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0d1117 0%, #1a202c 100%)'
          : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 0 }, // Increased padding for better mobile spacing
        perspective: isMobile ? 'none' : '1000px', // 3D perspective only for desktop
      }}
    >
      {/* 3D animated background elements for desktop */}
      {!isMobile && (
        <>
          <Box
            className="animated-gradient"
            sx={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(52,152,219,0.1) 0%, rgba(52,152,219,0) 70%)',
              top: '-100px',
              right: '-100px',
              zIndex: 0,
              transition: 'transform 0.5s ease-out',
              filter: 'blur(20px)',
            }}
          />
          <Box
            className="animated-gradient"
            sx={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(46,204,113,0.1) 0%, rgba(46,204,113,0) 70%)',
              bottom: '-50px',
              left: '-50px',
              zIndex: 0,
              transition: 'transform 0.5s ease-out',
              filter: 'blur(20px)',
            }}
          />
          <Box
            className="animated-gradient"
            sx={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(155,89,182,0.1) 0%, rgba(155,89,182,0) 70%)',
              top: '40%',
              left: '20%',
              zIndex: 0,
              transition: 'transform 0.5s ease-out',
              filter: 'blur(20px)',
            }}
          />

          {/* 3D floating particles - desktop only */}
          {Array.from({ length: 20 }).map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: Math.random() * 10 + 2, // 2-12px
                height: Math.random() * 10 + 2, // 2-12px
                borderRadius: '50%',
                backgroundColor: i % 3 === 0
                  ? 'rgba(52, 152, 219, 0.2)'
                  : i % 3 === 1
                    ? 'rgba(46, 204, 113, 0.2)'
                    : 'rgba(155, 89, 182, 0.2)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                zIndex: 0,
                animation: `float-particle ${Math.random() * 10 + 15}s linear infinite`,
                animationDelay: `-${Math.random() * 15}s`,
                transform: `translateZ(${Math.random() * 100}px)`,
                '@keyframes float-particle': {
                  '0%': { transform: 'translate(0, 0) rotate(0deg)' },
                  '33%': { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(120deg)` },
                  '66%': { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(240deg)` },
                  '100%': { transform: 'translate(0, 0) rotate(360deg)' },
                }
              }}
            />
          ))}

          {/* Grid pattern overlay for desktop */}
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
              transform: 'translateZ(0px)',
              transformStyle: 'preserve-3d',
            }}
          />
        </>
      )}

      {/* Mobile-optimized background elements */}
      {isMobile && (
        <>
          {/* Optimized background gradients for mobile */}
          <Box
            className="mobile-gradient"
            sx={{
              position: 'absolute',
              width: '250px', // Smaller size for mobile
              height: '250px', // Smaller size for mobile
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(52,152,219,0.1) 0%, rgba(52,152,219,0) 70%)',
              top: '-70px',
              right: '-70px',
              zIndex: 0,
              transition: 'transform 0.3s ease-out', // Faster transition for mobile
              filter: 'blur(15px)', // Less blur for better performance
              animation: 'pulse-mobile 8s ease-in-out infinite', // Subtle pulsing for mobile
              '@keyframes pulse-mobile': {
                '0%': { opacity: 0.7 },
                '50%': { opacity: 0.5 },
                '100%': { opacity: 0.7 },
              }
            }}
          />
          <Box
            className="mobile-gradient"
            sx={{
              position: 'absolute',
              width: '200px', // Smaller size for mobile
              height: '200px', // Smaller size for mobile
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(46,204,113,0.1) 0%, rgba(46,204,113,0) 70%)',
              bottom: '-50px',
              left: '-50px',
              zIndex: 0,
              transition: 'transform 0.3s ease-out', // Faster transition for mobile
              filter: 'blur(15px)', // Less blur for better performance
              animation: 'pulse-mobile 8s ease-in-out infinite alternate', // Alternate direction for variety
            }}
          />

          {/* Mobile-specific decorative elements */}
          {Array.from({ length: 8 }).map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: Math.random() * 6 + 2, // Smaller particles for mobile (2-8px)
                height: Math.random() * 6 + 2, // Smaller particles for mobile (2-8px)
                borderRadius: '50%',
                backgroundColor: i % 3 === 0
                  ? 'rgba(52, 152, 219, 0.2)'
                  : i % 3 === 1
                    ? 'rgba(46, 204, 113, 0.2)'
                    : 'rgba(155, 89, 182, 0.2)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                zIndex: 0,
                opacity: 0.6,
                animation: `float-mobile-particle ${Math.random() * 8 + 10}s linear infinite`, // Shorter animation for mobile
                animationDelay: `-${Math.random() * 10}s`,
                '@keyframes float-mobile-particle': { // Simplified animation for better performance
                  '0%': { transform: 'translate(0, 0)' },
                  '50%': { transform: `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px)` },
                  '100%': { transform: 'translate(0, 0)' },
                }
              }}
            />
          ))}

          {/* Subtle grid pattern (lighter for mobile) */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
              backgroundSize: '30px 30px', // Larger grid for mobile
              zIndex: 0,
              opacity: 0.3, // More subtle on mobile
            }}
          />
        </>
      )}

      <Container maxWidth="lg" sx={{ zIndex: 1, py: isMobile ? 4 : 8, position: 'relative' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 28, md: 5 }} // Increased spacing for mobile
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Text content - optimized for mobile */}
          <Box
            ref={textContentRef}
            sx={{
              maxWidth: '600px',
              textAlign: { xs: 'center', md: 'left' },
              transition: isMobile ? 'none' : 'transform 0.2s ease-out',
              px: isMobile ? 6 : 0, // Add horizontal padding on mobile
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.6 : 0.8 }} // Faster animation on mobile
            >
              <Typography
                variant="overline"
                component="div"
                sx={{
                  color: theme.palette.primary.main,
                  letterSpacing: 3,
                  mb: 2,
                  fontWeight: 600,
                  fontSize: { xs: '0.7rem', md: '0.75rem' },
                  textShadow: !isMobile ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
                }}
              >
                INGÉNIEUR FULL STACK SÉNIOR
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                  lineHeight: 1.2,
                  mb: 2,
                  textShadow: !isMobile ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                Bonjour, je suis{' '}
                <Typography
                  component="span"
                  variant="inherit"
                  sx={{
                    background: 'linear-gradient(90deg, #3498db 0%, #2ecc71 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block',
                    position: 'relative',
                  }}
                >
                  Abdoulaye Saliou
                </Typography>
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  maxWidth: isMobile ? '100%' : '600px', // Control width on mobile
                }}
              >
                Spécialisé dans le développement mobile et la création d'architectures backend robustes et évolutives.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={isMobile ? 3 : 2} // More spacing between buttons on mobile
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Button
                  variant="contained"
                  href="/CV_Abdoulaye_Saliou.pdf"
                  download
                  size={isMobile ? "large" : "large"}
                  startIcon={<DownloadIcon />}
                  fullWidth={isMobile}
                  sx={{
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    py: isMobile ? 1.8 : 1.5, // Taller button on mobile for better touch target
                    px: 3,
                    boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)',
                    '&:hover': {
                      boxShadow: '0 6px 15px rgba(52, 152, 219, 0.4)',
                      transform: 'translateY(-2px) scale(1.02)'
                    },
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    // Add ripple effect for mobile
                    '&:active': {
                      transform: 'scale(0.98)',
                      boxShadow: '0 2px 5px rgba(52, 152, 219, 0.3)',
                    }
                  }}
                >
                  Télécharger mon CV
                </Button>

                <Button
                  variant="outlined"
                  onClick={scrollToNextSection}
                  size={isMobile ? "large" : "large"}
                  fullWidth={isMobile}
                  sx={{
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    py: isMobile ? 1.8 : 1.5, // Taller button on mobile for better touch target
                    px: 3,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px) scale(1.02)'
                    },
                    // Add ripple effect for mobile
                    '&:active': {
                      transform: 'scale(0.98)',
                    },
                    transition: 'all 0.3s ease',
                    position: 'relative',
                  }}
                >
                  Découvrir mes services
                </Button>
              </Stack>
            </motion.div>
          </Box>

          {/* Profile image container - optimized for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.2 }} // Faster animation on mobile
            style={{
              position: 'relative',
              maxWidth: isMobile ? '280px' : '400px', // Slightly larger for mobile
              margin: isMobile ? '0 auto' : 'initial',
              marginTop: isMobile ? '30px' : '0', // Marge supplémentaire au-dessus de l'image
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
            className="profile-container"
          >
            {/* Profile photo container with optimized effects for mobile */}
            <Box
              ref={profileImageRef}
              sx={{
                position: 'relative',
                transition: 'transform 0.3s ease-out',
                transformStyle: 'preserve-3d',
                // Mobile-specific animation
                '@keyframes float-mobile': {
                  '0%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-5px)' }, // Subtle float on mobile
                  '100%': { transform: 'translateY(0px)' },
                }
              }}
            >
              {/* Decorative background shape - simplified for mobile */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(52,152,219,0.1) 0%, rgba(46,204,113,0.1) 100%)',
                  transform: 'rotate(-5deg) scale(1.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  zIndex: 1,
                  boxShadow: isMobile ? '0 10px 30px rgba(0,0,0,0.2)' : '0 20px 50px rgba(0,0,0,0.3)', // Lighter shadow for mobile
                }}
              />

              {/* Shadow effect under the profile container */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '90%',
                  height: '15px', // Smaller shadow for mobile
                  bottom: '-15px',
                  left: '5%',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.15)', // More subtle shadow for mobile
                  filter: 'blur(10px)', // Less blur for mobile
                  zIndex: 0,
                  transform: 'scaleY(0.5)',
                }}
              />

              {/* Main container - simplified for mobile */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '20px',
                  padding: '10px',
                  background: 'linear-gradient(135deg, rgba(52,152,219,0.2) 0%, rgba(46,204,113,0.2) 100%)',
                  backdropFilter: 'blur(5px)', // Less blur for better mobile performance
                  border: '1px solid rgba(255,255,255,0.1)',
                  zIndex: 2,
                  boxShadow: isMobile ? '0 5px 15px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.2)', // Lighter shadow for mobile
                }}
              >
                <Box
                  component="img"
                  src="https://i.imgur.com/YoaX3mU.png"
                  alt="Profile"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    display: 'block',
                    border: '2px solid rgba(255,255,255,0.1)',
                  }}
                />

                {/* Simplified shine overlay for mobile */}
                {isMobile && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
                      zIndex: 3,
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </Box>

              {/* Mobile-optimized decorative elements (simplified) */}
              {isMobile && (
                <>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '60px', // Smaller for mobile
                      height: '60px', // Smaller for mobile
                      borderRadius: '12px',
                      backgroundColor: 'rgba(52,152,219,0.1)',
                      backdropFilter: 'blur(3px)', // Less blur for better performance
                      border: '1px solid rgba(255,255,255,0.1)',
                      top: '-15px',
                      right: '-15px',
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)', // Lighter shadow for mobile
                      animation: 'float-mobile-element 4s ease-in-out infinite', // Shorter animation for mobile
                      '@keyframes float-mobile-element': {
                        '0%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-5px)' }, // Smaller movement for mobile
                        '100%': { transform: 'translateY(0px)' },
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                      alt="Flutter"
                      sx={{
                        width: '30px', // Smaller for mobile
                        height: '30px', // Smaller for mobile
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      position: 'absolute',
                      width: '50px', // Smaller for mobile
                      height: '50px', // Smaller for mobile
                      borderRadius: '50%',
                      backgroundColor: 'rgba(46,204,113,0.1)',
                      backdropFilter: 'blur(3px)', // Less blur for better performance
                      border: '1px solid rgba(255,255,255,0.1)',
                      bottom: '5px',
                      left: '-15px',
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)', // Lighter shadow for mobile
                      animation: 'float-mobile-element 4s ease-in-out infinite 1s', // Offset timing
                    }}
                  >
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                      alt="Node.js"
                      sx={{
                        width: '25px', // Smaller for mobile
                        height: '25px', // Smaller for mobile
                      }}
                    />
                  </Box>
                </>
              )}
            </Box>
          </motion.div>
        </Stack>
      </Container>

      {/* Scroll indicator - optimized for mobile */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 15, md: 40 }, // Higher position on mobile
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, isMobile ? 5 : 10, 0] }} // Smaller movement on mobile
          transition={{ repeat: Infinity, duration: isMobile ? 1.2 : 1.5 }} // Slightly faster on mobile
        >
          {/* Simplified for mobile - no 3D effect */}
          <KeyboardArrowDownIcon
            sx={{
              fontSize: { xs: 35, md: 40 }, // Slightly larger on mobile for better tap target
              color: theme.palette.primary.main,
              filter: !isMobile ? 'drop-shadow(0 0 5px rgba(52, 152, 219, 0.5))' : 'none',
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
