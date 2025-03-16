import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, LinearProgress, Avatar, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const languages = [
  { name: 'Français', level: 'Très Bien', progress: 95, color: '#3498db' },
  { name: 'Anglais', level: 'Bien', progress: 75, color: '#2ecc71' },
];

const LanguagesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      py={isMobile ? 5 : 8}
      sx={{
        backgroundColor: '#121212',
        color: '#F5F5F5',
      }}
      id="languages"
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: isMobile ? 3 : 5,
            fontSize: { xs: '1.75rem', md: '2rem' }
          }}
        >
          Langues
        </Typography>

        <Box sx={{
          maxWidth: '550px',
          mx: 'auto',
          px: 2
        }}>
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ marginBottom: '24px' }}
            >
              <Card sx={{
                backgroundColor: 'rgba(26, 32, 44, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}>
                <CardContent sx={{ p: isMobile ? 2 : 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      sx={{
                        backgroundColor: `${lang.color}30`,
                        color: lang.color,
                        mr: 2,
                        fontWeight: 'bold'
                      }}
                    >
                      {lang.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '1.1rem', md: '1.25rem' }
                        }}
                      >
                        {lang.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#B0B0B0"
                        sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}
                      >
                        {lang.level}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        ml: 'auto',
                        fontWeight: 600,
                        color: lang.color
                      }}
                    >
                      {lang.progress}%
                    </Typography>
                  </Box>

                  <Box sx={{ position: 'relative', width: '100%' }}>
                    <LinearProgress
                      variant="determinate"
                      value={lang.progress}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: lang.color,
                          borderRadius: 5,
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default LanguagesSection;
