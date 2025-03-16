// experience/ExperienceCard.js
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { motion } from 'framer-motion';
import AchievementItem from './AchievementItem';
import TechnologyChip from './TechnologyChip';

const ExperienceCard = ({ experience, index }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ height: '100%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card
        sx={{
          height: '100%',
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(26, 32, 44, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: hovered && isDesktop ? 'translateY(-10px)' : 'none',
          boxShadow: hovered && isDesktop ? '0 20px 30px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.1)',
          border: theme.palette.mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.05)'
            : '1px solid rgba(0, 0, 0, 0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top decoration bar */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #3498db, #2ecc71)',
          }}
        />

        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar
              sx={{
                bgcolor: experience.logoBackground,
                color: experience.logoColor,
                fontWeight: 'bold',
                width: 50,
                height: 50,
                mr: 2,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              {experience.logo}
            </Avatar>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {experience.role}
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}
              >
                <BusinessIcon sx={{ fontSize: 16, mr: 0.5 }} />
                {experience.company}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <CalendarTodayIcon sx={{ fontSize: 14, mr: 0.5 }} />
                {experience.duration}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="subtitle2"
            sx={{
              mb: 2,
              p: 1,
              backgroundColor: 'rgba(52, 152, 219, 0.1)',
              borderRadius: 1,
              display: 'inline-block'
            }}
          >
            {experience.project}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {experience.description.map((desc, i) => (
            <Typography
              key={i}
              variant="body2"
              paragraph
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 1,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: theme.palette.primary.main,
                  mr: 1,
                  fontSize: '1rem',
                  minWidth: '15px'
                }}
              >
                •
              </Box>
              {desc}
            </Typography>
          ))}

          {isDesktop && (
            <>
              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Compétences clés
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1, mx: -0.5 }}>
                {experience.technologies.map((tech, i) => (
                  <TechnologyChip key={i} label={tech} small />
                ))}
              </Box>

              {experience.achievements && (
                <>
                  <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                    Réalisations
                  </Typography>

                  <Box>
                    {experience.achievements.map((achievement, i) => (
                      <AchievementItem key={i} achievement={achievement} />
                    ))}
                  </Box>
                </>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
