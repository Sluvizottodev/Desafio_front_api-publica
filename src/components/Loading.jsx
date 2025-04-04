import { CircularProgress, Box, Typography } from '@mui/material';

function Loading() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        p: 4,
        gap: 2
      }}
    >
      <CircularProgress />
      <Typography variant="body1">Carregando dados...</Typography>
    </Box>
  );
}

export default Loading;