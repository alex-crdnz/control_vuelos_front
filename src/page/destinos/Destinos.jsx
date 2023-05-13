import React, { Fragment, useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import RegistroDestino from "../destinos/RegistroDestino"
import TableDestino from "../destinos/TableDestino";
import VueloService from "../../services/VueloService";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import UserService from "../../services/UserService";
import { Button } from "@mui/material";
import UseDestinosRegistrados from "../../hooks/UseDestinosRegistrados";

const getInitialForm = () => {
    return {
        "clave": "",
        "destino": "",
        "tua": ""
    }
}

const Destinos = (props) => {
    const user = (localStorage.getItem("user"));
    const password = (localStorage.getItem("password"));

    useEffect(() => {
        UserService.getRole(user, password)
            .then((resp) => {
                if (resp.data["role"] === "user") {
                    props.history.push("/inicio")
                }
            })
    }, []);
    const [destinosList, reload] = UseDestinosRegistrados();
    const [payload, setPayload] = useState(getInitialForm());

    const delete_destino = () => {
        VueloService.deleteDestino(payload)
            .then(resp => {
                reload()
            })
            .catch(error => {
                console.log()
            })
    }

    const save = () => {
        VueloService.postDestino(payload)
            .then(resp => {
                reload()
            })
            .catch(error => {
                console.log()
            })
    }

    return (
        <Fragment>
            <Stack
                m={2}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="center"
            >
                <Box>
                    <RegistroDestino payload={payload} setPayload={setPayload} />
                </Box>
                <Box>
                    <div>
                        <TableDestino destinosList={destinosList}></TableDestino>
                    </div>
                </Box>
            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center' >
                <Button variant="outlined" onClick={delete_destino} startIcon={<DeleteIcon />}>Delete</Button>
                <Button variant="contained" onClick={save} endIcon={<SendIcon />}>Registrar</Button>
            </Stack>
        </Fragment>
    )
}
export default Destinos