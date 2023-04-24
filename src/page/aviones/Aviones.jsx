import React, { Fragment, useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import RegistroAviones from "../aviones/RegistroAviones";
import TableAviones from "../aviones/TableAviones"
import AvionSevice from "../../services/AvionSevice";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";
import UseAvionesRegistrados from "../../hooks/UseAvionesRegistrados";

const getInitialForm = () => {
    return {
        "modelo": "",
        "filas": "",
        "vip": "",
        "premium": "",
        "costoStandard": "",
        "costoVip": "",
        "costoPremium": ""
    }
}

const Aviones = (props) => {
    const [avionesList, reload] = UseAvionesRegistrados();
    const [payload, setPayload] = useState(getInitialForm());

    const delete_avion = () => {
        AvionSevice.deleteAvion(payload)
            .then(resp => {
                console.log(resp)
                reload()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const save = () => {
        AvionSevice.postAvion(payload)
            .then(resp => {
                console.log(resp)
                reload()
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Fragment>
            <Stack
                m={2}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Box>
                    <RegistroAviones payload={payload} setPayload={setPayload} />
                </Box>
                <Box>
                    <div>
                        <TableAviones avionesList={avionesList}></TableAviones>
                    </div>
                </Box>
            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center'>
                <Button variant="outlined" onClick={delete_avion} startIcon={<DeleteIcon />}>Delete</Button>
                <Button variant="contained" onClick={save} endIcon={<SendIcon />}>Registrar</Button>
            </Stack>
        </Fragment>
    )
}
export default Aviones