// experience/TechnologyChip.js
import React from 'react';
import { Chip, useTheme } from '@mui/material';

const TechnologyChip = ({ label, small = false }) => {
  const theme = useTheme();

  return (
    <Chip
      label={label}
      size={small ? "small" : "medium"}
      sx={{
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        border: '1px solid rgba(52, 152, 219, 0.3)',
        color: theme.palette.primary.main,
        fontWeight: 500,
        fontSize: small ? '0.6rem' : '0.7rem',
        height: small ? '20px' : '24px',
        m: 0.5,
        '& .MuiChip-label': {
          px: small ? 1 : 1.5,
        },
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          transform: 'translateY(-2px)',
        }
      }}
    />
  );
};

export default TechnologyChip;
