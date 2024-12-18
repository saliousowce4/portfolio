import React from 'react';
import { Box, Container, Typography, Grid, LinearProgress } from '@mui/material';

const languages = [
  { name: 'Français', level: 'Très bien', progress: 95 },
  { name: 'Anglais', level: 'Bien', progress: 75 },
];

const LanguagesSection = () => {
  return (
    <Box py={6} sx={{ backgroundColor: '#121212', color: '#F5F5F5' }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontFamily: 'Playfair Display', fontWeight: 'bold', mb: 4 }}
        >
          Langues
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {languages.map((lang, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#90caf9' }}
              >
                {lang.name}
              </Typography>
              <Typography variant="body2" color="#B0B0B0" gutterBottom>
                Niveau : {lang.level}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={lang.progress}
                sx={{
                  height: 10,
                  backgroundColor: '#333',
                  '& .MuiLinearProgress-bar': { backgroundColor: '#90caf9' },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LanguagesSection;
