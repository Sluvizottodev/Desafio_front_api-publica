import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography } from '@mui/material';

function ComprasTable({ 
  compras, 
  page, 
  rowsPerPage, 
  totalItems,
  onPageChange,
  onRowsPerPageChange
}) {
  if (compras.length === 0) {
    return (
      <Typography variant="body1" sx={{ mt: 2 }}>
        Nenhuma compra encontrada com os filtros selecionados.
      </Typography>
    );
  }

  return (
    <Paper sx={{ mt: 2 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Processo</TableCell>
              <TableCell>Unidade</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell>Fornecedor</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Enquadramento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {compras.map((compra) => (
              <TableRow key={compra.data.id}>
                <TableCell>{compra.data.processo}</TableCell>
                <TableCell>{compra.data.unidade}</TableCell>
                <TableCell sx={{ maxWidth: 200 }}>{compra.data.objeto}</TableCell>
                <TableCell align="right">{compra.valorFormatado}</TableCell>
                <TableCell>{compra.data.fornecedor}</TableCell>
                <TableCell>{compra.dataFormatada}</TableCell>
                <TableCell>{compra.data.enquadramento}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => onPageChange(newPage)}
        onRowsPerPageChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        labelRowsPerPage="Itens por página:"
        labelDisplayedRows={({ from, to, count }) => 
          `${from}-${to} de ${count !== -1 ? count : `mais de ${to}`}`
        }
      />
    </Paper>
  );
}

export default ComprasTable;