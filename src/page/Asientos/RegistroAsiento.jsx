import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const RegistroAsiento = ({ payload, setPayload, vuelos }) => {
    const [clave, setClave] = useState("");
    const [vueloAsiento, setVueloAsiento] = useState("");

    useEffect(() => {
        setPayload({
            clave: clave
        });

    }, [clave])

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="vuelo"
                select
                label="vuelo"
                helperText="Seleccionael Vuelo"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
            >
                <MenuItem value="">
                    seleccione
                </MenuItem>
                {vuelos.map((option) => (

                    <MenuItem key={option.clave_vuelo} value={option.clave_vuelo}>
                        {option.clave_vuelo}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    )
}
export default RegistroAsiento
