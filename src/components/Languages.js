import React from 'react';
import { Container, Typography, Chip, Stack } from '@mui/material';

const languages = ["Français - Courant", "Anglais - Très Bien"];

const Languages = () => {
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Langues
      </Typography>
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        {languages.map((lang, index) => (
          <Chip key={index} label={lang} color="secondary" style={{ margin: '5px 0' }} />
        ))}
      </Stack>
    </Container>
  );
};

export default Languages;
