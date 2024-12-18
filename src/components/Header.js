import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
  return (
    <AppBar position="static" color="primary" style={{ padding: '10px 0' }}>
      <Toolbar style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
          Abdoulaye Saliou SECK
        </Typography>
        <Typography variant="subtitle1">Ingénieur Full Stack Sénior</Typography>
        <div style={{ marginTop: 10 }}>
          <IconButton href="mailto:sailouwillbesomeone@gmail.com" color="inherit">
            <EmailIcon />
          </IconButton>
          <IconButton href="tel:+221777917971" color="inherit">
            <PhoneIcon />
          </IconButton>
          <IconButton href="https://linkedin.com/in/abdoulaye-saliou-seck" target="_blank" color="inherit">
            <LinkedInIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
