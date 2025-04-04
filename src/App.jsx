import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import ComprasView from './views/ComprasView';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1976d2' },
      secondary: { main: '#dc004e' },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: 'none' }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton 
        onClick={() => setDarkMode(!darkMode)}
        sx={{ position: 'fixed', right: 16, top: 16 }}
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      <ComprasView />
    </ThemeProvider>
  );
};

export default App;