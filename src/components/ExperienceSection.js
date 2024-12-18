import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Divider, Chip } from '@mui/material';

const experiences = [
  {
    role: 'Ingénieur Full Stack',
    company: 'ASSURAF INC.',
    project: 'Projets : Assuraf, Assur\'Agent',
    duration: '05/2023 - Présent',
    description: [
      'Direction du développement des applications mobiles sur Android et iOS',
      'Mentorat de 2 développeurs juniors',
      'Optimisation de l\'interface (-25% du temps de navigation)',
      'Implémentation de notifications push avec Firebase',
      'Mise en place d\'architecture microservices (Node.js/Express) sur AWS (-20% de latence)',
      'Automatisation des pipelines CI/CD',
    ],
    technologies: ['Flutter', 'Dart', 'Node.js', 'Express', 'AWS', 'Firebase', 'GitLab CI/CD', 'Riverpod'],
  },
  {
    role: 'Ingénieur Full Stack',
    company: 'SBG AFRICA',
    project: 'Projet : WoyofPay',
    duration: '08/2022 - 05/2023',
    description: [
      'Lead technique - Sprint planning et gestion des priorités',
      'Développement d\'interfaces UX/UI (+25% d\'engagement)',
      'Développement de services web bancaires/mobile money',
      'Optimisation des performances backend et sécurité',
    ],
    technologies: ['Flutter', 'Dart', 'Floor', 'Riverpod', 'MVVM', 'Firebase', 'Tests Unitaires'],
  },
  {
    role: 'Ingénieur Full Stack',
    company: 'SBG AFRICA',
    project: 'Projet : Parrainel',
    duration: '08/2022 - 05/2023',
    description: [
      'Conception UX/UI avec Adobe XD',
      'Développement full-stack',
      'Création de tableaux de bord (+35% de précision des données)',
      'Direction des processus de test et déploiement (-10% de problèmes post-déploiement)',
    ],
    technologies: ['PHP', 'HTML5', 'JavaScript', 'jQuery', 'CSS3', 'Bootstrap', 'MySQL'],
  },
  {
    role: 'Développeur Android',
    company: 'TÉRANGA BUSINESS SOLUTIONS',
    project: 'Projet : Kliner',
    duration: '08/2021 - 08/2022',
    description: [
      'Développement d\'application mobile de services ménagers',
      'Réduction de 30% du cycle de développement',
      'Augmentation de 20% du taux d\'adoption',
      'Optimisation de l\'interface utilisateur',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'MVVM'],
  },
  {
    role: 'Développeur Android Junior',
    company: 'INNOV4AFRICA',
    project: 'Projets : I-pay, I-shop',
    duration: '12/2019 - 03/2020',
    description: [
      'Développement d\'applications mobiles pour les services de paiement (I-pay) et e-commerce (I-shop)',
      'Intégration de SOAP API pour des transactions sécurisées avec documentation complète du processus',
      'Amélioration de l\'interface pour une navigation intuitive, réduisant les erreurs utilisateur',
      'Participation aux tests pour un déploiement rapide en mode Agile',
    ],
    technologies: ['Java', 'XML', 'SOAP API', 'SQLite', 'okHttp', 'GitHub', 'Trello'],
  },
];

const ExperienceSection = () => {
  return (
    <Box py={6} sx={{ backgroundColor: '#1E1E2D', color: '#F5F5F5' }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontFamily: 'Playfair Display', fontWeight: 'bold', mb: 4 }}
        >
          Expérience Professionnelle
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ backgroundColor: '#121212', boxShadow: 3, color: '#F5F5F5' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {exp.role} | {exp.company}
                  </Typography>
                  <Typography variant="subtitle2" color="#90caf9">
                    {exp.project} ({exp.duration})
                  </Typography>
                  <Divider sx={{ my: 2, backgroundColor: '#444' }} />
                  {exp.description.map((desc, i) => (
                    <Typography key={i} variant="body2" paragraph>
                      • {desc}
                    </Typography>
                  ))}
                  <Box mt={2}>
                    {exp.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{ margin: '2px', backgroundColor: '#333', color: '#90caf9' }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
