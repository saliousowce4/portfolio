import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Abdoulaye Saliou SECK
          </Typography>
          <Typography variant="subtitle1">
            Ingénieur Full Stack Sénior | Dakar, Sénégal
          </Typography>
        </Box>
        <Box>
          <IconButton href="mailto:saliouwillbesomeone@gmail.com" color="inherit">
            <EmailIcon />
          </IconButton>
          <IconButton href="tel:+221777917971" color="inherit">
            <PhoneIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/abdoulaye-saliou-seck-b2147515b" target="_blank" color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
