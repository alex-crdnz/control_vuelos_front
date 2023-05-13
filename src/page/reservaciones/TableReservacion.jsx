import React, { Fragment, useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import UseListAsientos from "../../hooks/UseListAsientos";
import { render } from "@testing-library/react";


const TableReservacion = ({ vuelosList, ListA, ListB, ListC, ListD, ListE, ListF, ListCont, props }) => {
    const [ListZ, setListZ] = useState("");
    let asientos = [JSON.parse(localStorage.getItem("asientos"))]
    let asientosValue = ""
    const save = (asiento) => {

        let found = asientos.indexOf(asiento);
        if (found == -1 && asiento != "X") {
            asientos.push(asiento)
        }
        else {
            delete (asientos[found])
        }
        var filtered = asientos.filter(function (x) {
            return x !== undefined;
        });
        filtered.forEach(element => {
            asientosValue=asientosValue+","+element
        });
        let lista = asientosValue.split(",")
        let lista_verdadera=[]
        let filter = []
        lista.forEach(element => {
            let found2 = lista_verdadera.indexOf(element);
            if (found2 == -1 && element != "" && element != "X") {
                lista_verdadera.push(element)
            }
            else {
                delete (lista_verdadera[found2])
            }
            filter = lista_verdadera.filter(function (x) {
                return x !== undefined;
            });
        });
        localStorage.setItem("asientos", JSON.stringify(filter))
        setListZ(String(filter))
    }
    

    const limpiar = () => {
        asientos=[]
        localStorage.setItem("asientos", "")
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            {/* <Button onClick={limpiar} endIcon={<DeleteIcon />}>Limpiar Asiento</Button> */}
            <h3>Asientos: {ListZ}</h3>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "lightblue" }}>
                            <TableCell align="center">asiento</TableCell>
                            <TableCell align="center">asiento</TableCell>
                            <TableCell align="center">asiento</TableCell>
                            <TableCell align="center">pasillo</TableCell>
                            <TableCell align="center">asiento</TableCell>
                            <TableCell align="center">asiento</TableCell>
                            <TableCell align="center">asiento</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ListCont.map((row) => (
                            <TableRow
                                key={row}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center"><Button variant="contained" onClick={() => save(ListA[row])}>{ListA[row]}</Button> </TableCell>
                                <TableCell align="center"><Button variant="contained" onClick={() => save(ListB[row])}>{ListB[row]}</Button> </TableCell>
                                <TableCell align="center"><Button variant="contained" onClick={() => save(ListC[row])}>{ListC[row]}</Button> </TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"><Button variant="contained" onClick={() => save(ListD[row])}>{ListD[row]}</Button> </TableCell>
                                <TableCell align="center"><Button variant="contained" onClick={() => save(ListE[row])}>{ListE[row]}</Button> </TableCell>
                                <TableCell align="center"><Button variant="contained" onClick={() => save(ListF[row])}>{ListF[row]}</Button> </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TableReservacion