import { formatCurrency, formatDate } from '../utils/formatters';

class CompraModel {
  constructor(data) {
    this.data = data;
  }

  get valorFormatado() {
    return formatCurrency(this.data.valor);
  }

  get dataFormatada() {
    return formatDate(this.data.data_homologacao);
  }

  get descricaoResumida() {
    return truncateText(this.data.descricao, 60);
  }
}

export default CompraModel;