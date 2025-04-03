import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

function ComprasTable({ 
  compras, 
  page, 
  rowsPerPage, 
  totalItems,
  onPageChange,
  onRowsPerPageChange
}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Município</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Fornecedor</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {compras.map((compra) => (
              <TableRow key={compra.data.id}>
                <TableCell>{compra.data.municipio}</TableCell>
                <TableCell>{compra.data.descricao}</TableCell>
                <TableCell>{compra.valorFormatado}</TableCell>
                <TableCell>{compra.data.fornecedor}</TableCell>
                <TableCell>{compra.dataFormatada}</TableCell>
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
      />
    </>
  );
}

export default ComprasTable;