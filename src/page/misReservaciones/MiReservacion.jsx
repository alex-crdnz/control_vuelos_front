import React, { Fragment, useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import vueloService from "../../services/VueloService";
import { Button, IconButton } from "@mui/material";
import UseVuelosFiltrados from "../../hooks/UseVuelosFiltados"
import SearchIcon from '@mui/icons-material/Search';
import TableMisReservaciones from "./TableMisReservaciones";
import UserService from "../../services/UserService";
import ReservacionService from "../../services/ReservacionService";
import useVuelosRegistrados from "../../hooks/UseVuelosFiltados";

const MiReservacion = (props) => {
    const user = (localStorage.getItem("user"));
    const password = (localStorage.getItem("password"));
    const [reservacion, setReservacion] = useState([]);
    const [asientos, setAsientos] = useState([]);
    const list = []

    useEffect(() => {
        UserService.getRole(user, password)
            .then((resp) => {
                if (resp.data["message"] === "Credenciales correctas") {
                    ReservacionService.getMisReservaciones(resp.data["id"])
                        .then((reserva) => {
                            setReservacion(reserva.data)
                        })
                }
            })
        reservacion.forEach(row => {
            JSON.stringify(row["body"]["configuracion"]["configuracion"]["vuelo"]).forEach(element => {
                list.push(element)
            });
        });
        console.log("list")
        console.log(list)
    }, [])

    const save = () => {
        UserService.getRole(user, password)
            .then((resp) => {
                if (resp.data["message"] === "Credenciales correctas") {
                    ReservacionService.getMisReservaciones(resp.data["id"])
                        .then((reserva) => {
                            setReservacion(reserva.data)
                        })
                }
            })
    }

    return (
        <Fragment>
            <Stack

            >
                <Box>
                    <h1>Mis Reservaciones</h1>
                </Box>

            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center'>
            </Stack>
            <br></br>
            <TableMisReservaciones reservacion={reservacion} props={props}></TableMisReservaciones>
        </Fragment>
    )
}
export default MiReservacion;