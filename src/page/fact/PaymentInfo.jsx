import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const PaymentInfo = ({ vuelos, payload, tuaOrigen, tuaDestino, asientosList, tuaFinal, aviones }) => {
    const [vueloOrigen, setVueloOrigen] = useState("");
    const [vueloDestino, setVueloDestino] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [fechaLlegada, setFechaLlegada] = useState("");
    const tuaTotal = 0
    const data = JSON.parse(localStorage.getItem("vuelo"));
    useEffect(() => {
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
                <h2>Reservacion</h2>
                <h3>{vuelos["origen"]} a {vuelos["destino"]}</h3>
                <h3>Costos de Vuelo</h3>
                <h4>Tarifa Base: {vuelos["costo_base"]}</h4>
                <h4>IVA: {Number(vuelos["costo_base"]) * .16}</h4>
                <h3>Tarifa uso del Aeropuerto</h3>
                <h4>TUA {vuelos["origen"]}: {tuaOrigen}</h4>
                <h4>TUA {vuelos["destino"]}: {tuaDestino}</h4>
                <h3>Asientos</h3>
                {asientosList.map((row) => (
                    <h4>Asiento {row["clave_asiento"]} {row["clase"]}: {row["costo_base"]}</h4>
                ))}
                <h4>Total: {Number(vuelos["costo_base"]) + (Number(vuelos["costo_base"]) * .16) +
                    (Number(tuaOrigen)) + (Number(tuaDestino)) + (Number(tuaFinal))}</h4>
            </Grid>
        </Box>
    )
}
export default PaymentInfo;
