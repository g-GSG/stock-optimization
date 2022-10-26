import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ProductsTableStyled } from './products-table.styles';

const TableCellStyled = styled(TableCell)(() => ({
  '&.MuiTableCell-root': {
    color: '#FFFFFF',
    borderBottomColor: '#231942'
  },
}));

function ProductsTable({ rows }) {
  return (
    <TableContainer component={ProductsTableStyled}>
      <Table aria-label="Products table" >
        <TableHead>
          <TableRow>
            <TableCellStyled>Nome</TableCellStyled>
            <TableCellStyled>Quantidade</TableCellStyled>
            <TableCellStyled>Volume</TableCellStyled>
            <TableCellStyled>Lucro</TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCellStyled component="th" scope="row">
                {row.nome}
              </TableCellStyled>
              <TableCellStyled>{row.quantidade}</TableCellStyled>
              <TableCellStyled>{row.volume}</TableCellStyled>
              <TableCellStyled>{row.lucro}</TableCellStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductsTable