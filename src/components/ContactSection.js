import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent, Stack, Link, useTheme, useMediaQuery, Paper, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const contactCardRef = useRef(null);
  const formCardRef = useRef(null);

  // Handle 3D card effect on desktop
  useEffect(() => {
    if (isMobile || !contactCardRef.current || !formCardRef.current) return;

    const contactCard = contactCardRef.current;
    const formCard = formCardRef.current;

    const handleContactCardMouseMove = (e) => {
      const { left, top, width, height } = contactCard.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      // Calculate rotation and 3D effect
      const rotateY = x * 5; // max 5 degrees rotation
      const rotateX = -y * 5; // max 5 degrees rotation

      contactCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleFormCardMouseMove = (e) => {
      const { left, top, width, height } = formCard.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      // Calculate rotation and 3D effect
      const rotateY = x * 5; // max 5 degrees rotation
      const rotateX = -y * 5; // max 5 degrees rotation

      formCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    // Add event listeners
    contactCard.addEventListener('mousemove', handleContactCardMouseMove);
    contactCard.addEventListener('mouseleave', () => handleMouseLeave(contactCard));

    formCard.addEventListener('mousemove', handleFormCardMouseMove);
    formCard.addEventListener('mouseleave', () => handleMouseLeave(formCard));

    // Clean up
    return () => {
      contactCard.removeEventListener('mousemove', handleContactCardMouseMove);
      contactCard.removeEventListener('mouseleave', () => handleMouseLeave(contactCard));

      formCard.removeEventListener('mousemove', handleFormCardMouseMove);
      formCard.removeEventListener('mouseleave', () => handleMouseLeave(formCard));
    };
  }, [isMobile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <Box
      py={10}
      sx={{
        background: theme.palette.mode === 'dark'
          ? theme.palette.background.default
          : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      id="contact"
    >
      {/* Background effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52, 152, 219, 0.05) 0%, rgba(52, 152, 219, 0) 70%)',
          zIndex: 0
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46, 204, 113, 0.05) 0%, rgba(46, 204, 113, 0) 70%)',
          zIndex: 0
        }}
      />

      {/* Grid pattern background for desktop */}
      {!isMobile && (
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
            ÉCHANGEONS
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2
            }}
          >
            <Box component="span" sx={{ color: theme.palette.primary.main }}>Contactez</Box>-moi
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Discutons de votre projet et voyons comment je peux vous aider
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="stretch">
          {/* Contact Information Card */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              style={{ height: '100%' }}
            >
              <Card
                ref={contactCardRef}
                sx={{
                  height: '100%',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(46, 204, 113, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 10px 30px rgba(0,0,0,0.2)'
                    : '0 10px 30px rgba(0,0,0,0.1)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.05)'
                    : '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease',
                }}
              >
                {/* Decorative element */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    background: 'linear-gradient(90deg, #3498db 0%, #2ecc71 100%)'
                  }}
                />

                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                    Mes Coordonnées
                  </Typography>

                  <Stack spacing={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(52, 152, 219, 0.1)',
                          color: theme.palette.primary.main,
                          mr: 2
                        }}
                      >
                        <EmailIcon fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          <Link
                            href="mailto:saliouwillbesomeone@gmail.com"
                            color="inherit"
                            sx={{
                              textDecoration: 'none',
                              transition: 'color 0.2s',
                              '&:hover': { color: theme.palette.primary.main }
                            }}
                          >
                            saliouwillbesomeone@gmail.com
                          </Link>
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(46, 204, 113, 0.1)',
                          color: '#2ecc71',
                          mr: 2
                        }}
                      >
                        <PhoneIcon fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Téléphone
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          <Link
                            href="tel:+221777917971"
                            color="inherit"
                            sx={{
                              textDecoration: 'none',
                              transition: 'color 0.2s',
                              '&:hover': { color: '#2ecc71' }
                            }}
                          >
                            +221 77 791 79 71
                          </Link>
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(52, 152, 219, 0.1)',
                          color: theme.palette.primary.main,
                          mr: 2
                        }}
                      >
                        <LinkedInIcon fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          LinkedIn
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          <Link
                            href="https://www.linkedin.com/in/abdoulaye-saliou-seck-b2147515b/"
                            target="_blank"
                            color="inherit"
                            sx={{
                              textDecoration: 'none',
                              transition: 'color 0.2s',
                              '&:hover': { color: theme.palette.primary.main }
                            }}
                          >
                            Abdoulaye Saliou Seck
                          </Link>
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(46, 204, 113, 0.1)',
                          color: '#2ecc71',
                          mr: 2
                        }}
                      >
                        <LocationOnIcon fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Localisation
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          Dakar, Sénégal
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>

                  {/* Additional map or image for desktop */}
                  {!isMobile && (
                    <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <Box
                        sx={{
                          width: '100%',
                          height: '120px',
                          borderRadius: 2,
                          overflow: 'hidden',
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(26, 32, 44, 0.5)'
                            : 'rgba(0, 0, 0, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}
                      >

                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            color: theme.palette.text.secondary,
                            textAlign: 'center',
                            px: 2
                          }}
                        >
                          Disponible pour le travail sur site ou en télétravail dans le monde entier
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              style={{ height: '100%' }}
            >
              <Card
                ref={formCardRef}
                sx={{
                  height: '100%',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(26, 32, 44, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 10px 30px rgba(0,0,0,0.2)'
                    : '0 10px 30px rgba(0,0,0,0.1)',
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.05)'
                    : '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {submitSuccess ? (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        height: '100%',
                        minHeight: '400px',
                      }}
                    >
                      <CheckCircleOutlineIcon
                        sx={{
                          fontSize: 80,
                          color: '#2ecc71',
                          mb: 3,
                        }}
                      />
                      <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
                        Message envoyé !
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          mb: 4,
                          maxWidth: '400px',
                        }}
                      >
                        Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => setSubmitSuccess(false)}
                        sx={{
                          mt: 2,
                          borderWidth: '2px',
                          '&:hover': {
                            borderWidth: '2px',
                          },
                        }}
                      >
                        Envoyer un autre message
                      </Button>
                    </Box>
                  ) : (
                    <>
                      <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                        Envoyez-moi un message
                      </Typography>

                      <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Nom"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              variant="outlined"
                              error={!!errors.name}
                              helperText={errors.name}
                              disabled={isSubmitting}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: theme.palette.mode === 'dark'
                                      ? 'rgba(255, 255, 255, 0.2)'
                                      : 'rgba(0, 0, 0, 0.2)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: theme.palette.mode === 'dark'
                                      ? 'rgba(255, 255, 255, 0.4)'
                                      : 'rgba(0, 0, 0, 0.4)',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: theme.palette.primary.main,
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              variant="outlined"
                              error={!!errors.email}
                              helperText={errors.email}
                              disabled={isSubmitting}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: theme.palette.mode === 'dark'
                                      ? 'rgba(255, 255, 255, 0.2)'
                                      : 'rgba(0, 0, 0, 0.2)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: theme.palette.mode === 'dark'
                                      ? 'rgba(255, 255, 255, 0.4)'
                                      : 'rgba(0, 0, 0, 0.4)',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: theme.palette.primary.main,
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Message"
                              name="message"
                              multiline
                              rows={5}
                              value={formData.message}
                              onChange={handleChange}
                              variant="outlined"
                              error={!!errors.message}
                              helperText={errors.message}
                              disabled={isSubmitting}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: theme.palette.mode === 'dark'
                                      ? 'rgba(255, 255, 255, 0.2)'
                                      : 'rgba(0, 0, 0, 0.2)',
                                  },
                                  '&:hover fieldset': {
                                    borderColor: theme.palette.mode === 'dark'
                                      ? 'rgba(255, 255, 255, 0.4)'
                                      : 'rgba(0, 0, 0, 0.4)',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: theme.palette.primary.main,
                                  },
                                },
                              }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              endIcon={<SendIcon />}
                              disabled={isSubmitting}
                              sx={{
                                py: 1.5,
                                px: 3,
                                background: 'linear-gradient(90deg, #3498db 0%, #2ecc71 100%)',
                                '&:hover': {
                                  background: 'linear-gradient(90deg, #2980b9 0%, #27ae60 100%)',
                                },
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)',
                                '&::before': isSubmitting ? {
                                  content: '""',
                                  position: 'absolute',
                                  top: 0,
                                  left: '-100%',
                                  width: '200%',
                                  height: '100%',
                                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                  animation: 'loading 1.5s infinite',
                                } : {},
                                '@keyframes loading': {
                                  '0%': {
                                    transform: 'translateX(-100%)',
                                  },
                                  '100%': {
                                    transform: 'translateX(100%)',
                                  },
                                },
                              }}
                            >
                              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
