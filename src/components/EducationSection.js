import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const educationData = [
  {
    title: "Diplôme d'Ingénieur Technologue",
    year: "2021",
    institution: "École Supérieure Polytechnique de Dakar",
  },
  {
    title: "Licence Professionnelle",
    year: "2019",
    institution: "École Supérieure Polytechnique de Dakar",
  },
  {
    title: "DUT",
    year: "2018",
    institution: "École Supérieure Polytechnique de Dakar",
  },
  {
    title: "Baccalauréat scientifique",
    year: "2016",
    institution: "Lycée de Thiaroye",
  },
];

const EducationSection = () => {
  return (
    <Box py={6} sx={{ backgroundColor: '#1E1E2D', color: '#F5F5F5' }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontFamily: 'Playfair Display', fontWeight: 'bold', mb: 4 }}
        >
          Formation
        </Typography>
        <Grid container spacing={4}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  backgroundColor: '#121212',
                  color: '#F5F5F5',
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#90caf9' }}
                  >
                    {edu.title} ({edu.year})
                  </Typography>
                  <Typography variant="body2" color="#B0B0B0">
                    {edu.institution}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EducationSection;
