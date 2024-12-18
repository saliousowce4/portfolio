import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f4f4f4', marginTop: 20, padding: 10 }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 Abdoulaye Saliou SECK | Full Stack Engineer
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
