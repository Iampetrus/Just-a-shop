// src/globalStyles.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
  },
  typography: {
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '2.618rem', 
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '2.236rem', 
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.852rem', 
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.527rem', 
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.239rem', 
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.618rem', 
      fontWeight: 700,
    },
    body1: {
      fontFamily: '"Merriweather", serif',
      fontSize: '1rem', 
    },
    body2: {
      fontFamily: '"Merriweather", serif',
      fontSize: '0.875rem', 
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.125rem', 
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    // Mas cosas!
  },
});

export default theme;


