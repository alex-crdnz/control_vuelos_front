import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const RegistroVuelos = ({ vuelos, payload, setPayload, aviones }) => {
    const [vueloOrigen, setVueloOrigen] = useState("");
    const [vueloDestino, setVueloDestino] = useState("");
    const [costoBase, setCostoBase] = useState("");
    const [avion, setAvion] = useState("");
    const [claveVuelo, setClaveVuelo] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [fechaLlegada, setFechaLlegada] = useState("");

    useEffect(() => {
        setPayload({
            origen: vueloOrigen,
            destino: vueloDestino,
            costo_base: costoBase,
            id_avion: avion,
            clave_vuelo: claveVuelo,
            fecha_salida: fechaSalida,
            fecha_llegada: fechaLlegada
        });

    }, [vueloOrigen, vueloDestino, costoBase, avion, claveVuelo, fechaSalida, fechaLlegada])
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Clave" variant="outlined" value={claveVuelo} onChange={(e) => setClaveVuelo(e.target.value)} />
            <TextField id="outlined-basic" label="Costo Base" variant="outlined" value={costoBase} onChange={(e) => setCostoBase(e.target.value)} />

            <TextField
                id="outlined-basic"
                label="Fecha Salida "
                type="datetime-local"
                defaultValue="YYYY-MM-DDT 00:00:00"
                className={"DatePicker"}
                InputLabelProps={{
                    shrink: true,
                }}
                value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)}
            />
            <TextField
                id="outlined-basic"
                label="Fecha Llegada"
                type="datetime-local"
                defaultValue="YYYY-MM-DDT 00:00:00"
                className={"DatePicker"}
                InputLabelProps={{
                    shrink: true,
                }}
                value={fechaLlegada} onChange={(e) => setFechaLlegada(e.target.value)}
            />
            <TextField
                id="vuelo-origen"
                select
                label="Origen"
                helperText="Selecciona ciudad origen"
                value={vueloOrigen}
                onChange={(e) => setVueloOrigen(e.target.value)}
            >
                <MenuItem value="">
                    seleccione
                </MenuItem>
                {vuelos.map((option) => (

                    <MenuItem key={option.label} value={option.label}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="vuelo-destino"
                select
                label="Destino"
                helperText="Selecciona ciudad destino"
                value={vueloDestino}
                onChange={(e) => setVueloDestino(e.target.value)}
            >
                <MenuItem value="">
                    seleccione
                </MenuItem>
                {vuelos.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="avion-modelo"
                select
                label="Avión"
                helperText="Asigna un avión"
                value={avion}
                onChange={(e) => setAvion(e.target.value)}
            >
                <MenuItem value="">
                    seleccione
                </MenuItem>
                {aviones.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.modelo}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    )
}
export default RegistroVuelos
