// src/pages/Login.tsx

import React from 'react';
import { Box, Button, Container, CssBaseline, FormControl, InputLabel, TextField, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
/*
const ModeToggle: React.FC = () => {
  const theme = useTheme();
  const [darkMode, setDarkMode] = React.useState(theme.palette.mode === 'dark');
  
  const handleToggle = () => {
    setDarkMode(!darkMode);
    // Aquí se debería manejar el cambio del tema global si lo tienes configurado
  };

  return (
    <Button variant="contained" onClick={handleToggle}>
      {darkMode ? 'Turn light' : 'Turn dark'}
    </Button>
  );
};
*/
const Login: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <ModeToggle /> */}
        <Typography component="h1" variant="h5">
          Welcome!
        </Typography>
        <Typography variant="body2">Sign in to continue.</Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Log in
          </Button>
          <Typography variant="body2" align="center">
            Don't have an account?{' '}
            <Link href="/sign-up" variant="body2">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

