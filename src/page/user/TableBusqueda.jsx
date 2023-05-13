import React, { Fragment, useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const TableBusqueda = ({ vuelosList, props }) => {
    const save = (row) => {
        localStorage.setItem("vuelo", JSON.stringify(row));
        props.history.push("/reservacion")
    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "lightblue" }}>
                            <TableCell align="center">Origen</TableCell>
                            <TableCell align="center">Destino</TableCell>
                            <TableCell align="center">Salida</TableCell>
                            <TableCell align="center">Llegada</TableCell>
                            <TableCell align="center">Costo</TableCell>
                            <TableCell align="center">Seleccione</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vuelosList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row.origen}</TableCell>
                                <TableCell align="center">{row.destino}</TableCell>
                                <TableCell align="center">{row.fecha_salida}</TableCell>
                                <TableCell align="center">{row.fecha_llegada}</TableCell>
                                <TableCell align="center">{row.costo_base}</TableCell>
                                <TableCell align="center"><Button variant="contained" onClick={() => save(row)} startIcon={<FlightTakeoffIcon />}></Button> </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableBusqueda