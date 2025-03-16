import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button, Dialog, DialogTitle, DialogContent, DialogActions, useTheme, useMediaQuery, IconButton, Tab, Tabs, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Assuraf',
    type: 'Mobile App',
    category: 'mobile',
    image: 'https://i.imgur.com/placeholder1.jpg',
    imagePlaceholder: 'linear-gradient(135deg, #3498db 40%, #2ecc71 100%)',
    description: 'Application mobile d\'assurance permettant de souscrire et gérer des polices d\'assurance en quelques clics.',
    detailedDescription: 'Assuraf est une application complète d\'assurance qui permet aux utilisateurs de souscrire à différentes polices d\'assurance, de suivre leurs paiements, et de soumettre des réclamations directement depuis leur smartphone. L\'application offre une expérience utilisateur fluide avec des interfaces intuitives et des processus simplifiés.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'AWS'],
    features: [
      'Souscription d\'assurance en moins de 5 minutes',
      'Gestion de polices multiples',
      'Système de notification pour les paiements et échéances',
      'Déclaration de sinistre avec prise de photos',
      'Tableau de bord personnalisé'
    ],
    highlights: [
      'Réduction de 25% du temps de navigation',
      'Intégration avec les systèmes bancaires',
      'Architecture microservices pour une meilleure performance'
    ]
  },
  {
    title: 'WoyofPay',
    type: 'Fintech Solution',
    category: 'mobile',
    image: 'https://i.imgur.com/placeholder2.jpg',
    imagePlaceholder: 'linear-gradient(135deg, #9b59b6 40%, #3498db 100%)',
    description: 'Plateforme de paiement mobile et de transfert d\'argent adaptée au marché africain.',
    detailedDescription: 'WoyofPay est une solution fintech complète qui permet aux utilisateurs d\'effectuer des transferts d\'argent, de payer leurs factures, et d\'accéder à des services financiers de base. La plateforme a été spécialement conçue pour répondre aux besoins spécifiques du marché africain, avec une attention particulière à l\'accessibilité et à la sécurité.',
    technologies: ['Flutter', 'Dart', 'Floor', 'Riverpod', 'MVVM', 'Backend sécurisé'],
    features: [
      'Transfert d\'argent instantané',
      'Paiement de factures et services',
      'QR code pour paiements marchands',
      'Historique des transactions détaillé',
      'Multiples options de sécurité biométrique'
    ],
    highlights: [
      'Augmentation de 25% de l\'engagement utilisateur',
      'Architecture optimisée pour connexions faibles',
      'Support hors-ligne pour certaines fonctionnalités'
    ]
  },
  {
    title: 'Kliner',
    type: 'Service Platform',
    category: 'mobile',
    image: 'https://i.imgur.com/placeholder3.jpg',
    imagePlaceholder: 'linear-gradient(135deg, #e74c3c 40%, #f39c12 100%)',
    description: 'Application de mise en relation pour services ménagers à domicile.',
    detailedDescription: 'Kliner est une plateforme qui connecte les professionnels du nettoyage et des services ménagers avec des clients particuliers. Elle permet de planifier des rendez-vous, de suivre les prestations, et d\'effectuer des paiements sécurisés. L\'application a été conçue pour offrir une expérience utilisateur optimale tant pour les prestataires que pour les clients.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'MVVM', 'Firebase'],
    features: [
      'Réservation de services en quelques clics',
      'Système de géolocalisation pour trouver des prestataires à proximité',
      'Système de notation et d\'évaluation',
      'Interface de chat intégrée',
      'Planification flexible de rendez-vous'
    ],
    highlights: [
      'Réduction de 30% du cycle de développement',
      'Augmentation de 20% du taux d\'adoption',
      'Interface utilisateur intuitive et moderne'
    ]
  },
  {
    title: 'I-pay',
    type: 'Payment System',
    category: 'mobile',
    image: 'https://i.imgur.com/placeholder4.jpg',
    imagePlaceholder: 'linear-gradient(135deg, #2ecc71 40%, #1abc9c 100%)',
    description: 'Solution de paiement mobile pour le marché sénégalais intégrant différents services financiers.',
    detailedDescription: 'I-pay est une application de paiement mobile qui permet aux utilisateurs d\'effectuer des transactions financières de manière sécurisée. Elle intègre des fonctionnalités de portefeuille électronique, de paiement de factures et de transfert d\'argent, le tout dans une interface utilisateur intuitive et facile à utiliser.',
    technologies: ['Java', 'XML', 'SOAP API', 'SQLite', 'okHttp'],
    features: [
      'Portefeuille électronique sécurisé',
      'Paiement de factures (électricité, eau, internet)',
      'Transfert d\'argent entre utilisateurs',
      'Achat de crédit téléphonique',
      'Historique des transactions'
    ],
    highlights: [
      'Documentation complète du processus',
      'Intégration SOAP API pour transactions sécurisées',
      'Conception intuitive de l\'interface utilisateur'
    ]
  },
  {
    title: 'Parrainel',
    type: 'Web Platform',
    category: 'web',
    image: 'https://i.imgur.com/placeholder5.jpg',
    imagePlaceholder: 'linear-gradient(135deg, #3498db 40%, #9b59b6 100%)',
    description: 'Plateforme web de gestion et d\'analyse de données avec tableaux de bord personnalisés.',
    detailedDescription: 'Parrainel est une plateforme web complète qui offre des outils de gestion et d\'analyse de données avancés. Elle comprend des tableaux de bord personnalisables, des rapports détaillés et des outils de visualisation de données pour aider les entreprises à prendre des décisions éclairées.',
    technologies: ['PHP', 'HTML5', 'JavaScript', 'jQuery', 'CSS3', 'Bootstrap', 'MySQL'],
    features: [
      'Tableaux de bord personnalisables',
      'Visualisation de données avancée',
      'Rapports exportables (PDF, Excel)',
      'Alertes et notifications',
      'Contrôle d\'accès basé sur les rôles'
    ],
    highlights: [
      'Augmentation de 35% de la précision des données',
      'Interface utilisateur responsive et moderne',
      'Architecture robuste et sécurisée'
    ]
  }
];

// Group projects by categories for filtering
const projectCategories = [
  { value: 'all', label: 'Tous les projets' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'web', label: 'Web' }
];

const ProjectsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);

  // Handle parallax effect for desktop
  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      const projectCards = containerRef.current.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        const cardX = parseFloat(card.getAttribute('data-speed-x') || 1);
        const cardY = parseFloat(card.getAttribute('data-speed-y') || 1);

        card.style.transform = `translateX(${x * cardX * 10}px) translateY(${y * cardY * 10}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue);
  };

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <Box
      py={10}
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0d1117 0%, #1a202c 100%)'
          : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="projects"
      ref={containerRef}
    >
      {/* Decorative background shapes for desktop */}
      {!isMobile && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.05) 0%, transparent 60%)',
              zIndex: 0
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '15%',
              right: '10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(46, 204, 113, 0.05) 0%, transparent 60%)',
              zIndex: 0
            }}
          />

          {/* Grid pattern overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              zIndex: 0,
              opacity: 0.5,
            }}
          />
        </>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="overline"
            component="div"
            sx={{
              color: theme.palette.primary.main,
              letterSpacing: 3,
              fontWeight: 600,
              mb: 1
            }}
          >
            PORTFOLIO
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2
            }}
          >
            Projets<Box component="span" sx={{ color: theme.palette.primary.main }}> Récents</Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Découvrez quelques-unes des solutions innovantes que j'ai développées
          </Typography>
        </Box>

        {/* Category Filter Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Tabs
            value={activeCategory}
            onChange={handleCategoryChange}
            centered
            sx={{
              '& .MuiTab-root': {
                mx: 1,
                borderRadius: '20px',
                minWidth: isDesktop ? '120px' : '100px',
                fontWeight: 500,
                transition: 'all 0.3s',
                '&.Mui-selected': {
                  backgroundColor: 'rgba(52, 152, 219, 0.1)',
                  fontWeight: 600,
                }
              }
            }}
          >
            {projectCategories.map((category) => (
              <Tab
                key={category.value}
                value={category.value}
                label={category.label}
              />
            ))}
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    onMouseEnter={() => setHoveredProject(project.title)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="project-card"
                    data-speed-x={Math.random() * 0.3 + 0.1}
                    data-speed-y={Math.random() * 0.3 + 0.1}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(26, 32, 44, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                        boxShadow: hoveredProject === project.title
                          ? `0 20px 30px rgba(${theme.palette.mode === 'dark' ? '0,0,0' : '0,0,0'}, 0.2)`
                          : `0 10px 20px rgba(${theme.palette.mode === 'dark' ? '0,0,0' : '0,0,0'}, 0.1)`,
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          height: 200,
                          background: project.imagePlaceholder,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${project.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            opacity: 0.2,
                            transition: 'opacity 0.3s ease',
                          },
                          '&:hover::before': {
                            opacity: 0.3,
                          }
                        }}
                      >
                        <Typography variant="h4" sx={{
                          fontWeight: 700,
                          color: '#fff',
                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                          zIndex: 1,
                          position: 'relative'
                        }}>
                          {project.title}
                        </Typography>
                      </CardMedia>
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                            {project.title}
                          </Typography>
                          <Chip
                            label={project.type}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(52, 152, 219, 0.1)',
                              color: theme.palette.primary.main,
                              fontWeight: 500
                            }}
                          />
                        </Box>
                        <Typography variant="body2" sx={{ mb: 2, flexGrow: 1, color: theme.palette.text.secondary }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(46, 204, 113, 0.1)',
                                color: '#2ecc71',
                                fontWeight: 500,
                                fontSize: '0.7rem'
                              }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Chip
                              label={`+${project.technologies.length - 3}`}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                                color: theme.palette.primary.main,
                                fontWeight: 500,
                                fontSize: '0.7rem'
                              }}
                            />
                          )}
                        </Box>
                        <Button
                          variant="outlined"
                          fullWidth
                          onClick={() => handleClickOpen(project)}
                          sx={{
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            borderWidth: '2px',
                            '&:hover': {
                              borderWidth: '2px',
                              borderColor: theme.palette.primary.light,
                              backgroundColor: 'rgba(52, 152, 219, 0.1)'
                            }
                          }}
                        >
                          Voir Détails
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* Project Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(26, 32, 44, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              backgroundImage: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(46, 204, 113, 0.1) 100%)',
              borderRadius: 2,
              overflow: 'hidden'
            }
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 3,
                position: 'relative',
                borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`
              }}>
                <Box>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                    {selectedProject.title}
                  </Typography>
                  <Chip
                    label={selectedProject.type}
                    sx={{
                      backgroundColor: 'rgba(52, 152, 219, 0.1)',
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                      mt: 1
                    }}
                  />
                </Box>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        background: selectedProject.imagePlaceholder,
                        height: 250,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        mb: 2,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url(${selectedProject.image})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          opacity: 0.2,
                        }
                      }}
                    >
                      <Typography variant="h3" sx={{
                        fontWeight: 700,
                        color: '#fff',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        zIndex: 1,
                        position: 'relative'
                      }}>
                        {selectedProject.title}
                      </Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
                      Technologies Utilisées
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {selectedProject.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          sx={{
                            backgroundColor: 'rgba(46, 204, 113, 0.1)',
                            color: '#2ecc71',
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>

                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
                      Points Forts
                    </Typography>
                    <Box>
                      {selectedProject.highlights.map((highlight, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          paragraph
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 1
                          }}
                        >
                          <Box component="span" sx={{ color: theme.palette.primary.main, mr: 1, fontSize: '1.2rem' }}>•</Box>
                          {highlight}
                        </Typography>
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Description
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {selectedProject.detailedDescription}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
                      Fonctionnalités Principales
                    </Typography>
                    <Box>
                      {selectedProject.features.map((feature, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          paragraph
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 1
                          }}
                        >
                          <Box component="span" sx={{ color: theme.palette.primary.main, mr: 1, fontSize: '1.2rem' }}>•</Box>
                          {feature}
                        </Typography>
                      ))}
                    </Box>

                    {/* Additional faux buttons for demo purposes */}
                    <Box sx={{
                      mt: 3,
                      pt: 3,
                      borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                      display: 'flex',
                      gap: 2
                    }}>
                      <Button
                        variant="contained"
                        startIcon={<OpenInNewIcon />}
                        sx={{
                          flexGrow: 1,
                          py: 1.5,
                          boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)',
                        }}
                      >
                        Demo
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        sx={{
                          flexGrow: 1,
                          py: 1.5,
                          borderWidth: '2px',
                        }}
                      >
                        GitHub
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 2, borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}` }}>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px',
                      borderColor: theme.palette.primary.light,
                      backgroundColor: 'rgba(52, 152, 219, 0.1)'
                    }
                  }}
                >
                  Fermer
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
