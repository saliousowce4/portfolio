import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const experiences = [
  {
    title: "Ingénieur Full Stack | ASSURAF INC.",
    date: "05/2023 - Présent",
    details: "Technologies: Flutter, Dart, Node.js, Express, AWS, Firebase",
  },
  {
    title: "Ingénieur Full Stack | SBG AFRICA",
    date: "08/2022 - 05/2023",
    details: "Technologies: Flutter, Dart, Firebase, Clean Code, Gitlab CI/CD",
  },
  {
    title: "Développeur Android | TÉRANGA BUSINESS SOLUTIONS",
    date: "08/2021 - 08/2022",
    details: "Technologies: Kotlin, Jetpack Compose, Retrofit, Koin",
  },
];

const Experience = () => {
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Expériences Professionnelles
      </Typography>
      <List>
        {experiences.map((exp, index) => (
          <ListItem key={index} style={{ marginBottom: '10px' }}>
            <ListItemText
              primary={`${exp.title} (${exp.date})`}
              secondary={exp.details}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Experience;
