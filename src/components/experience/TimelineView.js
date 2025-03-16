// experience/TimelineView.js
import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  useTheme
} from '@mui/material';
// Import Timeline components from the correct package
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import TechnologyChip from './TechnologyChip';
import AchievementItem from './AchievementItem';

const TimelineView = ({ experiences }) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 4, mt: 6 }}>
      <Timeline position="alternate">
        {experiences.map((experience, index) => (
          <TimelineItem key={experience.project}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align={index % 2 === 0 ? "right" : "left"}
              variant="body2"
              color="text.secondary"
            >
              <Typography
                variant="subtitle2"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                {experience.duration}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  my: 1,
                  color: theme.palette.text.primary
                }}
              >
                {experience.role}
              </Typography>
              <Typography variant="body2">
                {experience.project}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1, justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}>
                {experience.technologies.slice(0, 3).map((tech, i) => (
                  <TechnologyChip key={i} label={tech} small />
                ))}
                {experience.technologies.length > 3 && (
                  <Box
                    component="span"
                    sx={{
                      px: 1.5,
                      py: 0.3,
                      borderRadius: '15px',
                      backgroundColor: 'rgba(52, 152, 219, 0.05)',
                      color: theme.palette.primary.main,
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      display: 'inline-block',
                      m: 0.5
                    }}
                  >
                    +{experience.technologies.length - 3}
                  </Box>
                )}
              </Box>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector
                sx={{
                  bgcolor: index === 0 ? 'transparent' : theme.palette.primary.main,
                  width: 2
                }}
              />
              <TimelineDot
                sx={{
                  bgcolor: experience.logoBackground,
                  color: experience.logoColor,
                  boxShadow: 3
                }}
              >
                {index === 0 ? <StarIcon /> : <WorkIcon />}
              </TimelineDot>
              <TimelineConnector
                sx={{
                  bgcolor: index === experiences.length - 1 ? 'transparent' : theme.palette.primary.main,
                  width: 2
                }}
              />
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Card
                sx={{
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(26, 32, 44, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 3,
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.05)'
                    : '1px solid rgba(0, 0, 0, 0.05)',
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: index % 2 === 0
                      ? 'perspective(1000px) rotateY(-2deg)'
                      : 'perspective(1000px) rotateY(2deg)',
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    {experience.company}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
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
                        <Box component="span" sx={{ color: theme.palette.primary.main, mr: 1 }}>
                          •
                        </Box>
                        {desc}
                      </Typography>
                    ))}
                  </Box>

                  {experience.achievements && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        Points clés
                      </Typography>
                      {experience.achievements.map((achievement, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 0.5
                          }}
                        >
                          <AchievementItem achievement={achievement} compact />
                        </Box>
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimelineView;
