import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const educations = [
  { title: "Diplôme d'Ingénieur Technologue", date: "11/2021", school: "École Supérieure Polytechnique de Dakar" },
  { title: "Licence Professionnelle", date: "07/2019", school: "École Supérieure Polytechnique de Dakar" },
];

const Education = () => {
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Formation
      </Typography>
      <List>
        {educations.map((edu, index) => (
          <ListItem key={index} style={{ marginBottom: '10px' }}>
            <ListItemText
              primary={`${edu.title} (${edu.date})`}
              secondary={edu.school}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Education;
