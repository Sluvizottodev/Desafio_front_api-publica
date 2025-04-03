import { Alert, AlertTitle } from '@mui/material';

function ErrorAlert({ message, onRetry }) {
  return (
    <Alert severity="error" onClose={onRetry}>
      <AlertTitle>Erro</AlertTitle>
      {message}
    </Alert>
  );
}

export default ErrorAlert;