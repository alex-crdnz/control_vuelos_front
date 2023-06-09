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
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 60 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "lightblue"}}>
                            <TableCell align="center">Clave</TableCell>
                            <TableCell align="center">Destino</TableCell>
                            <TableCell align="center">Tua</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {destinosList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row.values}</TableCell>
                                <TableCell align="center">{row.label}</TableCell>
                                <TableCell align="center">{row.tua}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableDestino