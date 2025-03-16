import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: "Diplôme d'Ingénieur Technologue",
    year: "2021",
    institution: "École Supérieure Polytechnique de Dakar",
    description: "Spécialisation en génie logiciel et systèmes d'information"
  },
  {
    title: "Licence Professionnelle",
    year: "2019",
    institution: "École Supérieure Polytechnique de Dakar",
    description: "Formation en développement d'applications et systèmes informatiques"
  },
  {
    title: "DUT",
    year: "2018",
    institution: "École Supérieure Polytechnique de Dakar",
    description: "Diplôme Universitaire de Technologie en informatique"
  },
  {
    title: "Baccalauréat scientifique",
    year: "2016",
    institution: "Lycée de Thiaroye",
    description: "Option sciences mathématiques et physiques"
  },
];

const EducationSection = () => {
  const theme = useTheme();

  return (
    <Box
      py={10}
      sx={{
        background: 'linear-gradient(135deg, #0d1117 0%, #1a202c 100%)',
        position: 'relative'
      }}
      id="education"
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46, 204, 113, 0.1) 0%, rgba(46, 204, 113, 0) 70%)',
          zIndex: 0
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, rgba(52, 152, 219, 0) 70%)',
          zIndex: 0
        }}
      />

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
            PARCOURS ACADÉMIQUE
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
            Formation
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Mon parcours académique dans le domaine de l'ingénierie et des technologies
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundImage: 'linear-gradient(to bottom, rgba(52, 152, 219, 0.8), rgba(46, 204, 113, 0.8))',
              zIndex: 0
            }}
          />

          {/* Education cards */}
          {educationData.map((edu, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                mb: 5,
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: index % 2 === 0 ? 'row' : 'row-reverse'
                },
                justifyContent: 'center',
                alignItems: {
                  xs: 'flex-start',
                  md: 'center'
                },
                pl: { xs: 5, md: 0 }
              }}
            >
              {/* Timeline point */}
              <Box
                sx={{
                  position: { xs: 'absolute', md: 'relative' },
                  left: { xs: '11px', md: 'auto' },
                  width: '20px',
                  height: '20px',
                  bgcolor: index % 2 === 0 ? '#3498db' : '#2ecc71',
                  borderRadius: '50%',
                  zIndex: 1,
                  boxShadow: `0 0 0 4px ${theme.palette.background.default}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: { xs: 'flex-start', md: 'center' },
                  mt: { xs: 2, md: 0 }
                }}
              >
                <SchoolIcon sx={{ fontSize: 12, color: 'white' }} />
              </Box>

              {/* Year Badge - Only shown on medium screens and up */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: 0,
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: index % 2 === 0 ? '#3498db' : '#2ecc71',
                  color: 'white',
                  borderRadius: '4px',
                  px: 2,
                  py: 0.5,
                  fontWeight: 'bold',
                  zIndex: 2
                }}
              >
                {edu.year}
              </Box>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  flex: 1,
                  maxWidth: { xs: '100%', md: '45%' },
                  marginLeft: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                  marginRight: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
                  width: '100%'
                }}
              >
                <Card
                  sx={{
                    backgroundColor: 'rgba(26, 32, 44, 0.8)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    border: index % 2 === 0
                      ? '1px solid rgba(52, 152, 219, 0.2)'
                      : '1px solid rgba(46, 204, 113, 0.2)',
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                        {edu.title}
                      </Typography>

                      {/* Year Badge - Only shown on small screens */}
                      <Typography
                        variant="subtitle2"
                        component="div"
                        sx={{
                          display: { xs: 'block', md: 'none' },
                          bgcolor: index % 2 === 0 ? '#3498db' : '#2ecc71',
                          color: 'white',
                          borderRadius: '4px',
                          px: 1,
                          py: 0.3,
                          fontWeight: 'bold'
                        }}
                      >
                        {edu.year}
                      </Typography>
                    </Box>

                    <Typography variant="subtitle1" color={theme.palette.primary.main} gutterBottom>
                      {edu.institution}
                    </Typography>

                    <Typography variant="body2" color={theme.palette.text.secondary}>
                      {edu.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default EducationSection;
