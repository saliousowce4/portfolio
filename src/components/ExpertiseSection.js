import React, { useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion';

const expertiseAreas = [
  {
    title: 'Architecture Full Stack',
    icon: <ArchitectureIcon sx={{ fontSize: 50 }} />,
    items: [
      'APIs REST sécurisées et performantes',
      'Architecture microservices Node.js/Express',
      'Infrastructure cloud AWS (EC2, S3, RDS)',
      'CI/CD automatisé',
      'Solutions cloud-native évolutives'
    ],
    technologies: ['Node.js', 'Express', 'AWS', 'Firebase', 'MySQL', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #2ecc71 0%, #1abc9c 100%)',
    iconBackground: 'rgba(46, 204, 113, 0.1)'
  },
  {
    title: 'Développement Mobile',
    icon: <SmartphoneIcon sx={{ fontSize: 50 }} />,
    items: [
      'Flutter/Dart avec architecture propre (MVVM)',
      'Android SDK/Kotlin/Java natif',
      'iOS SDK natif',
      'Tests unitaires et d\'intégration',
      'UI/UX responsive et performante',
      'Publication sur les stores'
    ],
    technologies: ['Flutter', 'Dart', 'Kotlin', 'Android SDK', 'Swift'],
    gradient: 'linear-gradient(135deg, #3498db 0%, #9b59b6 100%)',
    iconBackground: 'rgba(52, 152, 219, 0.1)'
  },

  {
    title: 'Leadership Technique',
    icon: <GroupsIcon sx={{ fontSize: 50 }} />,
    items: [
      'Direction d\'équipes de développement',
      'Mentorat de développeurs juniors',
      'Méthodologie Agile et Scrum',
      'Optimisation des processus',
      'Planification stratégique technique'
    ],
    technologies: ['Agile', 'Scrum', 'Git', 'Jira', 'Trello', 'GitLab CI/CD'],
    gradient: 'linear-gradient(135deg, #e74c3c 0%, #f39c12 100%)',
    iconBackground: 'rgba(231, 76, 60, 0.1)'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ExpertiseSection = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const expertiseRef = useRef(null);

  // Handle 3D perspective effect for desktop
  useEffect(() => {
    if (!isDesktop || !expertiseRef.current) return;

    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.expertise-card');
      const { left, top, width, height } = expertiseRef.current.getBoundingClientRect();

      cards.forEach(card => {
        // Get the card's position relative to the container
        const cardRect = card.getBoundingClientRect();
        const cardLeft = cardRect.left - left;
        const cardTop = cardRect.top - top;
        const cardCenterX = cardLeft + cardRect.width / 2;
        const cardCenterY = cardTop + cardRect.height / 2;

        // Calculate the distance from mouse to card center (normalized)
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        const distX = (mouseX - cardCenterX) / (width / 2);
        const distY = (mouseY - cardCenterY) / (height / 2);

        // Apply a subtle rotation and translation effect
        const maxTilt = 5;
        const maxTranslate = 10;

        // Apply more tilt when closer to the card
        const distance = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
        const intensity = Math.max(0, 1 - distance * 1.5);

        // Apply the transform
        card.style.transform = `
          perspective(1000px)
          rotateX(${-distY * maxTilt * intensity}deg)
          rotateY(${distX * maxTilt * intensity}deg)
          translateX(${distX * maxTranslate * intensity}px)
          translateY(${distY * maxTranslate * intensity}px)
          scale(${1 + intensity * 0.05})
        `;
      });
    };

    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.expertise-card');
      cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0) translateY(0) scale(1)';
      });
    };

    const container = expertiseRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDesktop]);

  return (
    <Box
      id="expertise"
      py={10}
      sx={{
        background: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
      ref={expertiseRef}
    >
      {/* Decorative lines */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.05,
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(52, 152, 219, 0.5) 25%, rgba(52, 152, 219, 0.5) 26%, transparent 27%, transparent 74%, rgba(52, 152, 219, 0.5) 75%, rgba(52, 152, 219, 0.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(52, 152, 219, 0.5) 25%, rgba(52, 152, 219, 0.5) 26%, transparent 27%, transparent 74%, rgba(52, 152, 219, 0.5) 75%, rgba(52, 152, 219, 0.5) 76%, transparent 77%, transparent)',
          backgroundSize: '80px 80px',
          zIndex: 0,
        }}
      />

      {/* Decorative blurred circles for desktop */}
      {isDesktop && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '15%',
              left: '5%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, rgba(52, 152, 219, 0) 70%)',
              filter: 'blur(40px)',
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              right: '5%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(46, 204, 113, 0.1) 0%, rgba(46, 204, 113, 0) 70%)',
              filter: 'blur(40px)',
              zIndex: 0,
            }}
          />
        </>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: theme.palette.primary.main,
              letterSpacing: 3,
              fontWeight: 600,
              mb: 1
            }}
          >
            MES SERVICES
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(90deg, #3498db 0%, #2ecc71 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}
          >
            Expertise Technique
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Des solutions complètes et innovantes pour vos projets digitaux
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {expertiseAreas.map((area, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card
                  className="expertise-card"
                  sx={{
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(26, 32, 44, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 0.9) 100%)',
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(255, 255, 255, 0.05)'
                      : '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                >
                  {/* Decorative top gradient bar */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '5px',
                      background: area.gradient,
                    }}
                  />

                  <CardContent sx={{ height: '100%', p: 4 }}>
                    {/* Icon with animated background for desktop */}
                    <Box
                      sx={{
                        mb: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      {isDesktop && (
                        <Box
                          sx={{
                            position: 'absolute',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: area.gradient,
                            opacity: 0.2,
                            filter: 'blur(10px)',
                            animation: 'pulse 2s infinite',
                            '@keyframes pulse': {
                              '0%': { transform: 'scale(0.95)', opacity: 0.2 },
                              '50%': { transform: 'scale(1.05)', opacity: 0.3 },
                              '100%': { transform: 'scale(0.95)', opacity: 0.2 },
                            },
                          }}
                        />
                      )}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          backgroundColor: area.iconBackground,
                          color: area.gradient.split(' ')[2],
                          position: 'relative',
                          zIndex: 1,
                          boxShadow: isDesktop ? '0 10px 20px rgba(0,0,0,0.1)' : 'none',
                        }}
                      >
                        {area.icon}
                      </Box>
                    </Box>

                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        textAlign: 'center',
                        mb: 3,
                        background: area.gradient,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        display: 'inline-block',
                        width: '100%',
                      }}
                    >
                      {area.title}
                    </Typography>

                    <List>
                      {area.items.map((item, i) => (
                        <ListItem key={i} sx={{ py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 'auto', mr: 1, color: area.gradient.split(' ')[2] }}>
                            <ArrowRightIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: 'body2',
                              sx: {
                                fontWeight: 500,
                                color: theme.palette.text.primary
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    {/* Technology chips for desktop */}
                    {isDesktop && (
                      <Box mt={3} display="flex" flexWrap="wrap" gap={1}>
                        {area.technologies.map((tech, i) => (
                          <Box
                            key={i}
                            component="span"
                            sx={{
                              px: 2,
                              py: 0.5,
                              borderRadius: '20px',
                              backgroundColor: 'rgba(52, 152, 219, 0.1)',
                              color: area.gradient.split(' ')[2],
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              display: 'inline-block',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-3px)',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                              }
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional expertise highlights for desktop */}
        {isDesktop && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Box
              mt={10}
              p={5}
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(26, 32, 44, 0.7) 0%, rgba(45, 55, 72, 0.7) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 240, 240, 0.8) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                border: theme.palette.mode === 'dark'
                  ? '1px solid rgba(255, 255, 255, 0.05)'
                  : '1px solid rgba(0, 0, 0, 0.05)',
              }}
            >
              {/* Decorative element */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '5px',
                  background: 'linear-gradient(90deg, #3498db, #2ecc71, #e74c3c, #f39c12)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientShift 10s ease infinite',
                  '@keyframes gradientShift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                }}
              />

              <Typography
                variant="h4"
                gutterBottom
                textAlign="center"
                sx={{ fontWeight: 700, mb: 4 }}
              >
                Compétences <span style={{ color: theme.palette.primary.main }}>Techniques</span>
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      position: 'relative',
                      display: 'inline-block',
                      pb: 1,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '50%',
                        height: '3px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: theme.palette.primary.main,
                      }
                    }}
                  >
                    Frontend / Mobile
                  </Typography>
                  <Typography paragraph>
                    Maîtrise des frameworks modernes pour la création d'interfaces utilisateurs fluides,
                    réactives et accessibles sur mobile et web.
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {['Flutter', 'Dart', 'Kotlin', 'Java', 'XML', 'Swift', 'React'].map((tech) => (
                      <Box
                        key={tech}
                        component="span"
                        sx={{
                          px: 2,
                          py: 0.5,
                          borderRadius: '20px',
                          backgroundColor: 'rgba(52, 152, 219, 0.1)',
                          color: theme.palette.primary.main,
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          display: 'inline-block',
                          mb: 1
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#2ecc71',
                      position: 'relative',
                      display: 'inline-block',
                      pb: 1,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '50%',
                        height: '3px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: '#2ecc71',
                      }
                    }}
                  >
                    Backend / Cloud
                  </Typography>
                  <Typography paragraph>
                    Développement de services robustes, évolutifs et sécurisés avec les meilleures
                    pratiques d'architecture et d'infrastructure cloud.
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {['Node.js', 'Express', 'AWS', 'Firebase', 'MySQL', 'MongoDB', 'REST APIs'].map((tech) => (
                      <Box
                        key={tech}
                        component="span"
                        sx={{
                          px: 2,
                          py: 0.5,
                          borderRadius: '20px',
                          backgroundColor: 'rgba(46, 204, 113, 0.1)',
                          color: '#2ecc71',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          display: 'inline-block',
                          mb: 1
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#e74c3c',
                      position: 'relative',
                      display: 'inline-block',
                      pb: 1,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '50%',
                        height: '3px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: '#e74c3c',
                      }
                    }}
                  >
                    DevOps / Méthodologies
                  </Typography>
                  <Typography paragraph>
                    Application des méthodes agiles et mise en place de processus CI/CD pour améliorer
                    la qualité, la vitesse et la fiabilité des développements.
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {['Git', 'CI/CD', 'GitLab', 'Agile', 'Scrum', 'Jira', 'Tests'].map((tech) => (
                      <Box
                        key={tech}
                        component="span"
                        sx={{
                          px: 2,
                          py: 0.5,
                          borderRadius: '20px',
                          backgroundColor: 'rgba(231, 76, 60, 0.1)',
                          color: '#e74c3c',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          display: 'inline-block',
                          mb: 1
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default ExpertiseSection;
