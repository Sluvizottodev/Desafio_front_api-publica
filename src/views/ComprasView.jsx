import { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import CompraController from '../controllers/CompraController';
import Filtros from '../components/Filtros';
import ComprasTable from '../components/ComprasTable';
import Loading from '../components/Loading';
import ErrorAlert from '../components/ErrorAlert';

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
      const response = await CompraController.fetchCompras(filters);
      setCompras(response.data || []);
      setTotalItems(response.total || 0);
    } catch (err) {
      setError('Erro ao carregar dados. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCompras();
  }, [filters.page, filters.per_page]);

  const handleSearch = () => {
    setFilters(prev => ({ ...prev, page: 1 }));
  };

  const handlePageChange = (newPage) => {
    setFilters(prev => ({ ...prev, page: newPage + 1 }));
  };

  const handleRowsPerPageChange = (rows) => {
    setFilters(prev => ({ ...prev, per_page: rows, page: 1 }));
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
        filters={filters} 
        setFilters={setFilters} 
        onSearch={handleSearch} 
      />

      {error && <ErrorAlert message={error} onRetry={loadCompras} />}

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