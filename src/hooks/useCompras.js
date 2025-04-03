import { useState, useEffect } from 'react';
import CompraController from '../controllers/CompraController';

export default function useCompras(initialFilters = {}) {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    page: 1,
    per_page: 20,
    ...initialFilters
  });
  const [totalItems, setTotalItems] = useState(0);

  const fetchCompras = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, total } = await CompraController.fetchCompras(filters);
      setCompras(data);
      setTotalItems(total);
    } catch (err) {
      setError(err.message || 'Erro ao carregar compras');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompras();
  }, [filters.page, filters.per_page]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }));
  };

  return {
    compras,
    loading,
    error,
    filters,
    totalItems,
    fetchCompras,
    setFilters: updateFilters
  };
}