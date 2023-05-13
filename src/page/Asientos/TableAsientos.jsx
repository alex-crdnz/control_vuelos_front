import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TableAsientos = ({ asientos }) => {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 60 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "lightblue"}}>
                            <TableCell align="left">Reservacion</TableCell>
                            <TableCell align="left">Asiento</TableCell>
                            <TableCell align="left">Ventana</TableCell>
                            <TableCell align="left">Pasillo</TableCell>
                            <TableCell align="left">Disponible</TableCell>
                            <TableCell align="left">Clase</TableCell>
                            <TableCell align="left">Costo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {asientos.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.clave_reservacion}</TableCell>
                                <TableCell align="left">{row.clave_asiento}</TableCell>
                                <TableCell align="left">{row.ventana}</TableCell>
                                <TableCell align="left">{row.pasillo}</TableCell>
                                <TableCell align="left">{row.disponible}</TableCell>
                                <TableCell align="left">{row.clase}</TableCell>
                                <TableCell align="left">{row.costo_base}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableAsientos