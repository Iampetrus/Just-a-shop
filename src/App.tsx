import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./styles/globalStyles";
import { RouterProvider } from 'react-router-dom';
import r from './routes/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={r}/>
    </ThemeProvider>
    
  );
}

export default App;
