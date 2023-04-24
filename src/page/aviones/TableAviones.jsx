import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const TableAviones = ({ avionesList }) => {
    console.log(avionesList)
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Clave Avion</TableCell>
                            <TableCell align="right">Asientos Standard</TableCell>
                            <TableCell align="right">Costo Standard</TableCell>
                            <TableCell align="right">Asientos Premium</TableCell>
                            <TableCell align="right">Costo Premium</TableCell>
                            <TableCell align="right">Asientos VIP</TableCell>
                            <TableCell align="right">Costo VIP</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {avionesList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row.modelo}</TableCell>
                                <TableCell align="right">{row.asientos_standard}</TableCell>
                                <TableCell align="right">{row.costo_base_standard}</TableCell>
                                <TableCell align="right">{row.asientos_premium}</TableCell>
                                <TableCell align="right">{row.costo_base_premium}</TableCell>
                                <TableCell align="right">{row.asientos_vip}</TableCell>
                                <TableCell align="right">{row.costo_base_vip}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableAviones