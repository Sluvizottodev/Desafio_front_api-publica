import { useState, useEffect } from 'react';
import { Typography, Container, Alert, AlertTitle, Box } from '@mui/material';
import CompraController from '../controllers/CompraController';
import Filtros from '../components/Filtros';
import ComprasTable from '../components/ComprasTable';
import Loading from '../components/Loading';


function ComprasView() {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    page: 1,
    per_page: 20
  });
  const [totalItems, setTotalItems] = useState(0);

  const loadCompras = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, total } = await CompraController.fetchCompras(filters);
      setCompras(data);
      setTotalItems(total);
    } catch (err) {
      setError(err.message || 'Erro ao carregar dados. Tente novamente.');
      console.error('Erro detalhado:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCompras();
  }, [filters.page, filters.per_page]);

  const handleSearch = (searchFilters) => {
    setFilters(prev => ({ 
      ...prev, 
      ...searchFilters,
      page: 1 // Resetar para a primeira página
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters(prev => ({ 
      ...prev, 
      page: newPage + 1 
    }));
  };

  const handleRowsPerPageChange = (rows) => {
    setFilters(prev => ({ 
      ...prev, 
      per_page: rows,
      page: 1
    }));
  };

  const handleRetry = () => {
    loadCompras();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Compras Diretas do Estado
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
        Dados de aquisições sem licitação formal - TCERJ
      </Typography>

      <Filtros 
        onSearch={handleSearch}
        initialValues={filters}
      />

      {error && (
        <Alert 
          severity="error" 
          onClose={handleRetry}
          sx={{ mb: 2 }}
        >
          <AlertTitle>Erro</AlertTitle>
          {error}
        </Alert>
      )}

      {loading ? (
        <Loading />
      ) : (
        <ComprasTable
          compras={compras}
          page={filters.page - 1}
          rowsPerPage={filters.per_page}
          totalItems={totalItems}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      )}
    </Container>
  );
}

export default ComprasView;