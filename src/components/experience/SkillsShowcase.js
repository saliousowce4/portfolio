// experience/SkillsShowcase.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const skillGroups = [
  { category: 'Mobile', skills: ['Flutter', 'Dart', 'Kotlin', 'Java Android', 'Swift'] },
  { category: 'Frontend', skills: ['JavaScript', 'React', 'Angular', 'HTML5', 'CSS3'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'Spring Boot', 'PHP', 'REST APIs'] },
  { category: 'Database', skills: ['MySQL', 'PostgreSQL', 'Firebase', 'MongoDB'] },
  { category: 'DevOps', skills: ['AWS', 'CI/CD', 'Docker', 'GitLab', 'GitHub Actions'] },
  { category: 'Architecture', skills: ['Clean Architecture', 'MVVM', 'Microservices', 'MVC'] }
];

const SkillsShowcase = () => {
  const theme = useTheme();

  return (
    <Box mt={6} px={1}>
      <Typography
        variant="h4"
        component="h3"
        textAlign="center"
        sx={{
          mb: 3,
          fontWeight: 600,
          fontSize: { xs: '1.5rem', md: '1.75rem' },
        }}
      >
        Compétences Techniques
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {skillGroups.map((group, idx) => (
          <Grid item xs={6} sm={6} md={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(26, 32, 44, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                  height: '100%',
                  p: { xs: 0.5, md: 1 },
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.05)'
                    : '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 1.5,
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      position: 'relative',
                      display: 'inline-block',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '40px',
                        height: '2px',
                        bottom: '-5px',
                        left: 0,
                        backgroundColor: theme.palette.primary.main,
                      }
                    }}
                  >
                    {group.category}
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={0.5}>
                    {group.skills.map((skill, i) => (
                      <Chip
                        key={i}
                        label={skill}
                        sx={{
                          background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.2) 0%, rgba(46, 204, 113, 0.2) 100%)',
                          border: '1px solid rgba(52, 152, 219, 0.3)',
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          mb: 0.5,
                          fontSize: { xs: '0.6rem', md: '0.7rem' },
                          height: { xs: '20px', md: '24px' },
                          '& .MuiChip-label': {
                            px: 1,
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsShowcase;
