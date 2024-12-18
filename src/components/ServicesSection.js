import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';

const services = [
  {
    title: 'Développement Mobile',
    icon: <CodeIcon sx={{ fontSize: 50, color: '#90caf9' }} />,
    items: [
      'Flutter/Dart',
      'Android SDK/Kotlin/Java',
      'Clean Architecture (MVVM)',
      'Tests Unitaires/Integration',
      'Publication Store'
    ],
  },
  {
    title: 'Architecture Full Stack',
    icon: <DesignServicesIcon sx={{ fontSize: 50, color: '#90caf9' }} />,
    items: [
      'Conception microservices',
      'APIs REST sécurisées performantes',
      'Infrastructure AWS (EC2, S3, RDS)',
      'Pipeline CI/CD automatisé',
      'Architecture scalable et sécurisée'
    ],
  },
  {
    title: 'Leadership Technique',
    icon: <BrushIcon sx={{ fontSize: 50, color: '#90caf9' }} />,
    items: [
      'Direction équipes de développement',
      'Mentorat développeurs juniors',
      'Optimisation processus',
      'Gestion de projets Agile',
      'Documentation technique'
    ],
  }
];

const ServicesSection = () => {
  return (
    <Box py={6} sx={{ backgroundColor: '#121212', color: '#F5F5F5' }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Playfair Display',
            fontWeight: 800,  // Plus gras
            mb: 4,
            color: '#FFFFFF',  // Blanc pur
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',  // Ombre pour meilleure lisibilité
            fontSize: '2.5rem'  // Taille plus grande
          }}
        >
          Services que je Propose
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: 'rgba(30, 30, 45, 0.95)',  // Plus foncé et légèrement transparent
                  color: '#F5F5F5',
                  textAlign: 'center',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',  // Ombre plus prononcée
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: '0.3s',
                    boxShadow: '0 6px 25px rgba(0,0,0,0.6)'  // Ombre encore plus prononcée au hover
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,  // Plus gras
                      mb: 2,
                      color: '#90caf9',  // Bleu clair pour le titre
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)'  // Légère ombre
                    }}
                  >
                    {service.title}
                  </Typography>
                  <List>
                    {service.items.map((item, i) => (
                      <ListItem
                        key={i}
                        sx={{
                          justifyContent: 'center',
                          color: '#FFFFFF',  // Blanc pur pour meilleure lisibilité
                          fontSize: '0.95rem',  // Taille légèrement plus grande
                          fontWeight: 500,  // Semi-bold pour meilleure lisibilité
                          py: 0.5,  // Espacement vertical
                          '&:hover': {
                            color: '#90caf9',  // Change de couleur au hover
                            backgroundColor: 'rgba(144, 202, 249, 0.1)'  // Léger highlight au hover
                          }
                        }}
                      >
                        <ListItemIcon sx={{
                          color: '#90caf9',
                          minWidth: '30px',
                          fontSize: '1.2rem'  // Taille plus grande pour le marqueur
                        }}>»</ListItemIcon>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
