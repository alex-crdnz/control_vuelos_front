import React, { Fragment, useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import BuscarVuelo from "./BuscarVuelo";
import vueloService from "../../services/VueloService";
import { Button } from "@mui/material";
import UseVuelosFiltrados from "../../hooks/UseVuelosFiltados"
import SearchIcon from '@mui/icons-material/Search';
import TableBusqueda from "./TableBusqueda";

const getInitialForm = () => {
    return {
        "origen": "",
        "destino": "",
        "fechaSalida": "",
        "fechaLlegada": ""
    }
}

const FormularioInicio = (props) => {
    
    const [vuelos, setVuelos] = useState([]);
    const [payload, setPayload] = useState(getInitialForm());
    const [vuelosList, reload] = UseVuelosFiltrados(payload);
    const delete_vuelo = () => {
        vueloService.deleteVuelos(payload)
            .then(resp => {
                reload()
            })
            .catch(error => {
                console.log()
            })
    }

    const save = () => {
        localStorage.setItem("asientos",JSON.stringify([]))
        reload()
    }


    useEffect(() => {
        vueloService.getVuelos()
            .then((resp) => {
                setVuelos(resp.data)
            })
            .catch((error) => {
                console.log()
            })
    }, [])


    return (
        <Fragment>
            <Stack
                
            >
                <Box>
                    <BuscarVuelo payload={payload} setPayload={setPayload} vuelos={vuelos}/>
                </Box>
                
            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center'>
                <Button variant="contained" onClick={save} endIcon={<SearchIcon />}>Buscar</Button>
            </Stack>
            <br></br>
            <TableBusqueda vuelosList={vuelosList} vuelos={vuelos} props={props}></TableBusqueda>
        </Fragment>
    )
}
export default FormularioInicio;