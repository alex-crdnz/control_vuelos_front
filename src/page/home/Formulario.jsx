import React, { Fragment, useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import TableVuelos from "./TableVuelos";
import RegistroVuelo from "./RegistroVuelos";
import vueloService from "../../services/VueloService";
import AvionSevice from "../../services/AvionSevice";
import { Button } from "@mui/material";
import UseVuelosRegistrados from "../../hooks/UseVuelosRegisrados";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const getInitialForm = () => {
    return {
        "origen": "",
        "destino": "",
        "costoBase": "",
        "avion": "",
        "claveVuelo": "",
        "fechaSalida": "",
        "fechaLlegada": ""
    }
}

const Formulario = (props) => {
    const [vuelosList, reload] = UseVuelosRegistrados();
    const [vuelos, setVuelos] = useState([]);
    const [aviones, setAviones] = useState([]);
    const [payload, setPayload] = useState(getInitialForm());

    const delete_vuelo = () => {
        vueloService.deleteVuelos(payload)
            .then(resp => {
                console.log(resp)
                reload()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const save = () => {
        vueloService.postVuelos(payload)
            .then(resp => {
                console.log(resp)
                reload()
            })
            .catch(error => {
                console.log(error)
            })
    }


    useEffect(() => {
        vueloService.getVuelos()
            .then((resp) => {
                setVuelos(resp.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        AvionSevice.getAviones()
            .then((resp) => {
                setAviones(resp.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <Fragment>
            <Stack
                m={2}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Box>
                    <RegistroVuelo payload={payload} setPayload={setPayload} vuelos={vuelos} aviones={aviones} />
                </Box>
                <Box>
                    <TableVuelos vuelosList={vuelosList} vuelos={vuelos}></TableVuelos>
                </Box>
            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center'>
                <Button variant="outlined" onClick={delete_vuelo} startIcon={<DeleteIcon />}>Delete</Button>
                <Button variant="contained" onClick={save} endIcon={<SendIcon />}>Registrar</Button>
            </Stack>
        </Fragment>
    )
}
export default Formulario