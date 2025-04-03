import { TextField, Button, Box, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

function Filtros({ filters, setFilters, onSearch }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Município"
            value={filters.municipio || ''}
            onChange={(e) => setFilters({ ...filters, municipio: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            label="Valor Mínimo"
            type="number"
            value={filters.valor_min || ''}
            onChange={(e) => setFilters({ ...filters, valor_min: Number(e.target.value) })}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            label="Valor Máximo"
            type="number"
            value={filters.valor_max || ''}
            onChange={(e) => setFilters({ ...filters, valor_max: Number(e.target.value) })}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <DatePicker
            label="Data Inicial"
            value={filters.data_inicio || null}
            onChange={(date) => setFilters({ ...filters, data_inicio: date })}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </Grid>
        <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            fullWidth 
            variant="contained" 
            onClick={onSearch}
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