import { useState } from 'react';
import { TextField, Button, Box, Grid, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Filtros({ initialValues, onSearch }) {
  const [filters, setFilters] = useState({
    municipio: initialValues.municipio || '',
    valor_min: initialValues.valor_min || '',
    valor_max: initialValues.valor_max || '',
    data_inicio: initialValues.data_inicio || null,
    data_fim: initialValues.data_fim || null
  });

  const handleChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSearch(filters);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Unidade/Município"
            value={filters.municipio}
            onChange={(e) => handleChange('municipio', e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            label="Valor Mínimo"
            type="number"
            value={filters.valor_min}
            onChange={(e) => handleChange('valor_min', e.target.value)}
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
        
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            label="Valor Máximo"
            type="number"
            value={filters.valor_max}
            onChange={(e) => handleChange('valor_max', e.target.value)}
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
        
        <Grid item xs={12} md={2}>
          <DatePicker
            label="Data Inicial"
            value={filters.data_inicio}
            onChange={(date) => handleChange('data_inicio', date)}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </Grid>
        
        <Grid item xs={12} md={2}>
          <DatePicker
            label="Data Final"
            value={filters.data_fim}
            onChange={(date) => handleChange('data_fim', date)}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </Grid>
        
        <Grid item xs={12} md={1} sx={{ display: 'flex' }}>
          <Button 
            fullWidth 
            variant="contained" 
            onClick={handleSubmit}
            sx={{ height: '56px' }}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Filtros;