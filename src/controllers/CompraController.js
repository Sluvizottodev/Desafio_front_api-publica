import CompraService from '../services/CompraService';
import CompraModel from '../models/CompraModel';

class CompraController {
  async fetchCompras(filters = {}) {
    try {
      const { page = 1, per_page = 20 } = filters;
      const inicio = (page - 1) * per_page;
      
      const response = await CompraService.getCompras({
        ...filters,
        inicio,
        limite: per_page
      });

      return {
        data: response.data.map(item => new CompraModel(item)),
        total: response.total
      };
    } catch (error) {
      console.error('Controller Error:', error);
      throw new Error(`Falha ao buscar compras: ${error.message}`);
    }
  }
}

export default new CompraController();