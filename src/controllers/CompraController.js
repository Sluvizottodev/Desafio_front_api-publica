import CompraService from '../services/CompraService';
import CompraModel from '../models/CompraModel';

class CompraController {
  async fetchCompras(filters = {}) {
    try {
      const response = await CompraService.getCompras(filters);
      
      return {
        data: response.data.map(item => new CompraModel(item)),
        total: response.total || 0
      };
    } catch (error) {
      console.error('Controller Error:', error);
      throw new Error('Falha ao buscar compras');
    }
  }
}

export default new CompraController();