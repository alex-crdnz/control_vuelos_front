import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const CrearReservacion = ({ vuelos, payload, setPayload, aviones }) => {
    const [vueloOrigen, setVueloOrigen] = useState("");
    const [vueloDestino, setVueloDestino] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [fechaLlegada, setFechaLlegada] = useState("");
    const data = JSON.parse(localStorage.getItem("vuelo"));
    useEffect(() => {
        setPayload({
            origen: vueloOrigen,
            destino: vueloDestino,
            fecha_salida: fechaSalida,
            fecha_llegada: fechaLlegada
        });

    }, [vueloOrigen, vueloDestino, fechaSalida, fechaLlegada])
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 4 },
            }}
            noValidate
            autoComplete="off"
        >
            <Grid>
                <h3>Verifique que los datos de su vuelo sean los correctos</h3>
                <h4>Origen: {data["origen"]}</h4>
                <h4>Destino: {data["destino"]}</h4>
                <h4>Fecha Salida: {data["fecha_salida"]}</h4>
                <h4>Fecha de Llegada: {data["fecha_llegada"]}</h4>
            </Grid>
        </Box>
    )
}
export default CrearReservacion;
