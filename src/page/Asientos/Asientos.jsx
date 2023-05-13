import React, { Fragment, useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import RegistroAsiento from "./RegistroAsiento";
import VueloService from "../../services/VueloService";
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import UserService from "../../services/UserService";
import UseDestinosRegistrados from "../../hooks/UseDestinosRegistrados";
import UseAsiento from "../../hooks/UseAsientos"
import TableAsientos from "./TableAsientos";
import AsientoService from "../../services/AsientoService";

const getInitialForm = () => {
    return {
        "clave": ""
    }
}

const Asientos = (props) => {
    const [payload, setPayload] = useState(getInitialForm());
    const user = (localStorage.getItem("user"));
    const password = (localStorage.getItem("password"));
    const [vuelos, setVuelos] = useState([]);
    const [asientos, setAsientos] = useState([]);
    const [asientosList, reload] = UseAsiento(payload);
    useEffect(() => {
        UserService.getRole(user, password)
            .then((resp) => {
                if (resp.data["role"] === "user") {
                    props.history.push("/inicio")
                }
            })
    }, []);

    useEffect(() => {
        VueloService.getVuelosRegistrados()
            .then((resp) => {
                setVuelos(resp.data)
            })
    }, [])

    const save = () => {
        reload()
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
                    <RegistroAsiento payload={payload} setPayload={setPayload} vuelos={vuelos} />
                </Box>
                <Box>
                    <div>
                        <TableAsientos asientos={asientosList}></TableAsientos>
                    </div>
                </Box>
            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center' >
                <Button variant="contained"  onClick={save} endIcon={<SearchIcon />}>Buscar</Button>
            </Stack>
        </Fragment>
    )
}
export default Asientos