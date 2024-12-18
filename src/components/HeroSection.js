import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#121212',
        color: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontFamily: 'Playfair Display',
            fontWeight: 'bold',
            fontSize: '3.5rem',
            mb: 2,
          }}
        >
          Bonjour! Je suis <br /> <strong>Abdoulaye Saliou Seck</strong>
        </Typography>
        <Typography variant="h5" color="#B0B0B0" paragraph>
          Ingénieur Full Stack Sénior spécialisé dans le développement mobile et backend.
        </Typography>
        <Button
          variant="contained"
          href="https://drive.google.com/uc?export=download&id=1hM53fOk_ZoKylXKP4el2I6R4_qzSjmON"
          download
          sx={{ backgroundColor: '#90caf9', '&:hover': { backgroundColor: '#64b5f6' } }}
        >
          Télécharger mon CV
        </Button>

      </Container>
      <Box
        component="img"
        src="https://i.imgur.com/YoaX3mU.png"
        alt="Profile"
        sx={{
          height: '70%',
          borderRadius: '10px',
          boxShadow: 3,
          display: { xs: 'none', md: 'block' } // Hide on mobile, show on medium screens and up
        }}
      />


    </Box>
  );
};

export default HeroSection;
