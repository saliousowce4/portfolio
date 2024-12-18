import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const experiences = [
  {
    company: 'ASSURAF INC.',
    role: 'Ingénieur Full Stack',
    period: '05/2023 - Present',
    description: [
      'Dirige le développement des applications Assuraf et Assur Agent.',
      'Mentorat de 2 développeurs juniors.',
      'Mise en place d\'une architecture microservices avec Node.js et AWS.',
    ],
  },
  {
    company: 'SBG AFRICA',
    role: 'Ingénieur Full Stack | WoyofPay',
    period: '08/2022 - 05/2023',
    description: [
      'Lead technique et gestion des sprints.',
      'Développement d\'interfaces UX/UI avec Adobe XD.',
      'Optimisation des requêtes SQL pour la sécurité et la performance.',
    ],
  },
  {
    company: 'TÉRANGA BUSINESS SOLUTIONS',
    role: 'Développeur Android',
    period: '08/2021 - 08/2022',
    description: [
      'Développement d\'applications mobiles de services ménagers.',
      'Amélioration de l\'interface pour une navigation intuitive.',
    ],
  },
];

const Experience = () => (
  <Container>
    <Typography variant="h5" color="primary" gutterBottom>
      Expériences Professionnelles
    </Typography>
    <List>
      {experiences.map((exp, index) => (
        <ListItem key={index} alignItems="flex-start">
          <ListItemText
            primary={`${exp.role} | ${exp.company} (${exp.period})`}
            secondary={exp.description.join(' • ')}
          />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Experience;
