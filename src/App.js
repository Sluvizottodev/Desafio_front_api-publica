import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ComprasView from './views/ComprasView';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <ComprasView />
      </div>
    </ThemeProvider>
  );
}

export default App;