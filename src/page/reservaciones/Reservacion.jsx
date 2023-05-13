import React, { Fragment, useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import vueloService from "../../services/VueloService";
import CrearReservacion from "./CrearReservacion";
import TableReservacion from "./TableReservacion"
import { Button, Hidden } from "@mui/material";
import UseVuelosFiltrados from "../../hooks/UseVuelosFiltados"
import SearchIcon from '@mui/icons-material/Search';
import UseAsiento from "../../hooks/UseAsientos"
import UseListAsientos from "../../hooks/UseListAsientos";
import DeleteIcon from '@mui/icons-material/Delete';
import PaidIcon from '@mui/icons-material/Paid';


const getInitialForm = () => {
    return {
        "origen": "",
        "destino": "",
        "fechaSalida": "",
        "fechaLlegada": ""
    }
}

const Reservacion = (props) => {
    const clave = {
        "clave": JSON.parse(localStorage.getItem("vuelo"))["clave_vuelo"]
    }
    const [asientosList, reload] = UseAsiento(clave);
    const [vuelos, setVuelos] = useState([]);
    const [visible, setVisible] = useState("hidden")
    const [payload, setPayload] = useState(getInitialForm());
    const [ListA, setListA] = useState([]);
    const [ListB, setListB] = useState([]);
    const [ListC, setListC] = useState([]);
    const [ListD, setListD] = useState([]);
    const [ListE, setListE] = useState([]);
    const [ListF, setListF] = useState([]);
    const [ListCont, setListCont] = useState([]);
    const A_values = []
    const B_values = []
    const C_values = []
    const D_values = []
    const E_values = []
    const F_values = []
    const cont = []
    const clase = []

    const list = () => {
        setVisible("visible")
        let aux = 0
        asientosList.map(element => {
            if (element["clave_asiento"].startsWith("A")) {
                cont.push(aux)
                if(element["clave_reservacion"]=="no reservada"){
                    A_values.push(element["clave_asiento"])
                }
                else{
                    A_values.push("X")
                }
                aux = aux + 1
            }
            if (element["clave_asiento"].startsWith("B")) {
                if(element["clave_reservacion"]=="no reservada"){
                    B_values.push(element["clave_asiento"])
                }
                else{
                    A_values.push("X")
                }
            }
            if (element["clave_asiento"].startsWith("C")) {
                if(element["clave_reservacion"]=="no reservada"){
                    C_values.push(element["clave_asiento"])
                }
                else{
                    A_values.push("X")
                }
            }
            if (element["clave_asiento"].startsWith("D")) {
                if(element["clave_reservacion"]=="no reservada"){
                    D_values.push(element["clave_asiento"])
                }
                else{
                    A_values.push("X")
                }
            }
            if (element["clave_asiento"].startsWith("E")) {
                if(element["clave_reservacion"]=="no reservada"){
                    E_values.push(element["clave_asiento"])
                }
                else{
                    A_values.push("X")
                }
            }
            if (element["clave_asiento"].startsWith("F")) {
                if(element["clave_reservacion"]=="no reservada"){
                    F_values.push(element["clave_asiento"])
                }
                else{
                    A_values.push("X")
                }
            }
        });
        setListA(A_values)
        setListB(B_values)
        setListC(C_values)
        setListD(D_values)
        setListE(E_values)
        setListF(F_values)
        setListCont(cont)
    }

    const payment = () => {
        props.history.push("/payment")
    }

    useEffect(() => {
        reload()
    }, [])

    useEffect(() => {
    }, [])
    return (
        <Fragment>
            <Stack
            >
                <Box>
                    <CrearReservacion payload={payload} setPayload={setPayload} vuelos={vuelos} />
                </Box>

            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center'>
                <Button variant="contained" onClick={list} endIcon={<SearchIcon />}>Buscar Asiento</Button>
            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center'>
            <h1></h1>
            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center'>
            <Button variant="contained" onClick={payment} endIcon={<PaidIcon />}>Calcular</Button>
            </Stack>
            <br></br>
            <div>
                <TableReservacion vuelosList={asientosList} ListA={ListA} ListB={ListB}
                    ListC={ListC} ListD={ListD} ListE={ListE} ListF={ListF} ListCont={ListCont} vuelos={vuelos}
                    props={props}></TableReservacion>
            </div>
        </Fragment>
    )
}
export default Reservacion;