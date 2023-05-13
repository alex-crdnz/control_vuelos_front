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

const TableMisReservaciones = ({ reservacion }) => {
    console.log("reservacion")
    console.log(reservacion)
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "lightblue" }}>
                            <TableCell align="right">Clave Reservacion</TableCell>
                            <TableCell align="right">Costo Total</TableCell>
                            <TableCell align="right">Configuracion</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservacion.map((row) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row["body"]["clave_reservacion"]}</TableCell>
                                <TableCell align="right">{row["body"]["costo_total"]}</TableCell>
                                <TableCell align="right">{JSON.stringify(row["body"]["configuracion"]["configuracion"]["vuelo"])}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableMisReservaciones