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

const TableVuelos = ({ vuelosList, vuelos }) => {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Clave</TableCell>
                            <TableCell align="right">Origen</TableCell>
                            <TableCell align="right">Destino</TableCell>
                            <TableCell align="right">Fecha Salida</TableCell>
                            <TableCell align="right">Fecha Llegada</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vuelosList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row.clave_vuelo}</TableCell>
                                <TableCell align="right">{row.origen}</TableCell>
                                <TableCell align="right">{row.destino}</TableCell>
                                <TableCell align="right">{row.fecha_salida}</TableCell>
                                <TableCell align="right">{row.fecha_llegada}</TableCell>
                                <TableCell align="right">{vuelos.find((vuelo) => parseInt(vuelo.values) === parseInt(row.origen))?.label}</TableCell>
                                <TableCell align="right">{vuelos.find((vuelo) => parseInt(vuelo.values) === parseInt(row.destino))?.label}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableVuelos