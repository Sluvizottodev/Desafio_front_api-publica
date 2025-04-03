import api from './api';

const CompraService = {
  async getCompras(filters = {}) {
    const params = {
      ...filters,
      page: filters.page || 1,
      per_page: filters.per_page || 20
    };

    try {
      const response = await api.get('/compras_diretas_estado', { params });
      return {
        data: response.data.data || response.data,
        total: response.data.total || response.data.length
      };
    } catch (error) {
      console.error('Service Error:', error);
      throw error;
    }
  }
};

export default CompraService;