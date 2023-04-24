import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const RegistroDestino = ({ payload, setPayload }) => {
    const [clave, setClave] = useState("");
    const [destino, setDestino] = useState("");

    useEffect(() => {
        setPayload({
            clave: clave,
            destino: destino
        });

    }, [clave, destino])

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
                id="clave"
                label="Clave"
                variant="outlined"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
            />
            <br></br>
            <TextField
                id="destino"
                label="Destino"
                variant="outlined"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
            />
        </Box>
    )
}
export default RegistroDestino
