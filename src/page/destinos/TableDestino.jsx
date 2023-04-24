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

const TableDestino = ({ destinosList }) => {
    console.log(destinosList)
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 60 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Clave</TableCell>
                            <TableCell align="left">Destino</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {destinosList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.values}</TableCell>
                                <TableCell align="left">{row.label}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableDestino