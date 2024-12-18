import React from 'react';
import { Container, Typography, Chip, Stack } from '@mui/material';

const skills = ["Flutter", "Node.js", "Firebase", "Spring Boot", "Java", "CI/CD"];

const Skills = () => {
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Compétences
      </Typography>
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" style={{ margin: '5px 0' }} />
        ))}
      </Stack>
    </Container>
  );
};

export default Skills;
