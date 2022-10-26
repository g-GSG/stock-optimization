import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ProductsTableStyled } from './products-table.styles';

function ProductsTable({rows}) {
  return (
    <TableContainer component={ProductsTableStyled}>
      <Table sx={{ minWidth: 650 }} aria-label="Products table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Volume</TableCell>
            <TableCell>Lucro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell>{row.quantidade}</TableCell>
              <TableCell>{row.volume}</TableCell>
              <TableCell>{row.lucro}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductsTable