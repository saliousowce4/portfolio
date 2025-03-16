// experience/AchievementItem.js
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BugReportIcon from '@mui/icons-material/BugReport';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ApiIcon from '@mui/icons-material/Api';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import DescriptionIcon from '@mui/icons-material/Description';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

// Achievement Icon component
const getAchievementIcon = (type) => {
  const iconMap = {
    performance: <SpeedIcon fontSize="small" />,
    server: <StorageIcon fontSize="small" />,
    ux: <DesignServicesIcon fontSize="small" />,
    engagement: <LightbulbIcon fontSize="small" />,
    architecture: <BuildIcon fontSize="small" />,
    security: <SecurityIcon fontSize="small" />,
    data: <AnalyticsIcon fontSize="small" />,
    bugfix: <BugReportIcon fontSize="small" />,
    analytics: <AnalyticsIcon fontSize="small" />,
    agile: <CalendarTodayIcon fontSize="small" />,
    growth: <TrendingUpIcon fontSize="small" />,
    api: <ApiIcon fontSize="small" />,
    documentation: <DescriptionIcon fontSize="small" />,
    mobile: <MobileFriendlyIcon fontSize="small" />,
    default: <StarIcon fontSize="small" />
  };

  return iconMap[type] || iconMap.default;
};

const AchievementItem = ({ achievement, compact = false }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: compact ? 0.5 : 1,
        p: compact ? 0.5 : 1,
        borderRadius: 1,
        backgroundColor: compact ? 'transparent' : 'rgba(52, 152, 219, 0.05)',
        transition: 'all 0.2s',
        '&:hover': {
          backgroundColor: 'rgba(52, 152, 219, 0.1)',
        },
        width: '100%'
      }}
    >
      <Box
        sx={{
          minWidth: compact ? 24 : 32,
          height: compact ? 24 : 32,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(52, 152, 219, 0.1)',
          color: theme.palette.primary.main,
          mr: 1,
        }}
      >
        {getAchievementIcon(achievement.icon)}
      </Box>
      <Typography variant="body2">
        {achievement.text}
      </Typography>
    </Box>
  );
};

export default AchievementItem;
