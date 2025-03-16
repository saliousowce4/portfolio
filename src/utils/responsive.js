import { useMediaQuery, useTheme } from '@mui/material';

// Custom hook to check responsive breakpoints - can be used in any component
export const useResponsive = () => {
  const theme = useTheme();

  return {
    isXs: useMediaQuery(theme.breakpoints.down('sm')),
    isSm: useMediaQuery(theme.breakpoints.between('sm', 'md')),
    isMd: useMediaQuery(theme.breakpoints.between('md', 'lg')),
    isLg: useMediaQuery(theme.breakpoints.between('lg', 'xl')),
    isXl: useMediaQuery(theme.breakpoints.up('xl')),

    // Shorthand helpers
    isMobile: useMediaQuery(theme.breakpoints.down('sm')),
    isTablet: useMediaQuery(theme.breakpoints.between('sm', 'md')),
    isDesktop: useMediaQuery(theme.breakpoints.up('md')),

    // Orientation helpers
    isPortrait: useMediaQuery('(orientation: portrait)'),
    isLandscape: useMediaQuery('(orientation: landscape)'),
  };
};

// Responsive spacing helper - returns different spacing values based on screen size
export const getResponsiveSpacing = (theme, { xs, sm, md, lg, xl }) => {
  return {
    [theme.breakpoints.down('sm')]: { padding: theme.spacing(xs || 2) },
    [theme.breakpoints.between('sm', 'md')]: { padding: theme.spacing(sm || 3) },
    [theme.breakpoints.between('md', 'lg')]: { padding: theme.spacing(md || 4) },
    [theme.breakpoints.between('lg', 'xl')]: { padding: theme.spacing(lg || 5) },
    [theme.breakpoints.up('xl')]: { padding: theme.spacing(xl || 6) },
  };
};

// Responsive font size helper - gradually increases font size based on viewport width
export const getResponsiveFontSize = (baseSizePx, scaleFactor = 0.5) => {
  return {
    fontSize: baseSizePx / 16 + 'rem',
    '@media (min-width: 600px)': {
      fontSize: (baseSizePx + 1 * scaleFactor) / 16 + 'rem',
    },
    '@media (min-width: 900px)': {
      fontSize: (baseSizePx + 2 * scaleFactor) / 16 + 'rem',
    },
    '@media (min-width: 1200px)': {
      fontSize: (baseSizePx + 3 * scaleFactor) / 16 + 'rem',
    },
    '@media (min-width: 1536px)': {
      fontSize: (baseSizePx + 4 * scaleFactor) / 16 + 'rem',
    },
  };
};

// Container width constraints for proper desktop layout
export const getResponsiveContainer = (theme) => ({
  maxWidth: {
    xs: '100%',
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
  paddingLeft: {
    xs: theme.spacing(2),
    sm: theme.spacing(3),
  },
  paddingRight: {
    xs: theme.spacing(2),
    sm: theme.spacing(3),
  },
  marginLeft: 'auto',
  marginRight: 'auto',
});
