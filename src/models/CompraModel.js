class CompraModel {
  constructor(data) {
    this.data = {
      id: data.Processo || Math.random().toString(36).substring(7),
      processo: data.Processo,
      valor: data.ValorProcesso || 0,
      objeto: data.Objeto || 'Descrição não disponível',
      enquadramento: data.EnquadramentoLegal || 'Não especificado',
      unidade: data.Unidade || 'Unidade não especificada',
      fornecedor: data.FornecedorVencedor || 'Fornecedor não especificado',
      dataAprovacao: data.DataAprovacao,
      item: data.Item,
      quantidade: data.Quantidade,
      unidadeMedida: data.UnidadeMedida,
      valorUnitario: data.ValorUnitario || 0
    };
  }

  get valorFormatado() {
    return this.data.valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  get dataFormatada() {
    if (!this.data.dataAprovacao) return 'Data não disponível';
    const date = new Date(this.data.dataAprovacao);
    return isNaN(date.getTime()) 
      ? 'Data inválida' 
      : date.toLocaleDateString('pt-BR');
  }

  get descricaoResumida() {
    return this.data.objeto.length > 50 
      ? `${this.data.objeto.substring(0, 50)}...` 
      : this.data.objeto;
  }
}

export default CompraModel;