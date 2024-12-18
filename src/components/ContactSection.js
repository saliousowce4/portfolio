import React from 'react';
import { Box, Container, Typography, Stack, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactSection = () => {
  return (
    <Box py={6} sx={{ backgroundColor: '#121212', color: '#F5F5F5', textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display', fontWeight: 'bold' }}>
          Contactez-moi
        </Typography>
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon sx={{ color: '#90caf9' }} />
            <Typography variant="body1">saliouwillbesomeone@gmail.com</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon sx={{ color: '#90caf9' }} />
            <Typography variant="body1">+221 77 791 79 71</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <LinkedInIcon sx={{ color: '#90caf9' }} />
            <Link
              href="https://www.linkedin.com/in/abdoulaye-saliou-seck-b2147515b/"
              target="_blank"
              color="#90caf9"
              underline="none"
            >
              Mon LinkedIn
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;
