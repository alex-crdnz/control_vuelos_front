import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const RegistroAviones = ({payload, setPayload }) => {
    const [claveAvion, setClaveAvion] = useState("");
    const [filas, setFilas] = useState("");
    const [vip, setVip] = useState("");
    const [premium, setPremium] = useState("");
    const [costoStandard, setCostoStandard] = useState("");
    const [costoVip, setCostoVip] = useState("");
    const [costoPremium, setCostoPremium] = useState("");


    useEffect(() => {
        setPayload({
            modelo: claveAvion,
            filas: filas,
            vip: vip,
            premium: premium,
            costoStandard: costoStandard,
            costoVip: costoVip,
            costoPremium: costoPremium
        });

    }, [claveAvion, filas, vip, premium, costoStandard, costoVip, costoPremium])

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
                id="clave_avion"
                label="Clave Avion"
                variant="outlined"
                value={claveAvion}
                onChange={(e) => setClaveAvion(e.target.value)}
            />
            <TextField
                id="filas"
                label="Filas"
                variant="outlined"
                type="number"
                value={filas}
                onChange={(e) => setFilas(e.target.value)}
            />
            <TextField
                id="vip"
                label="Asientos VIP"
                placeholder="1,2,3,4"
                variant="outlined"
                value={vip}
                onChange={(e) => setVip(e.target.value)}
            />
            <TextField
                id="premium"
                label="Asientos Premium"
                placeholder="1,2,3,4"
                variant="outlined"
                value={premium}
                onChange={(e) => setPremium(e.target.value)}
            />
            <TextField
                id="costo_standard"
                label="Costo Base Standard"
                type="number"
                variant="outlined"
                value={costoStandard}
                onChange={(e) => setCostoStandard(e.target.value)}
            />
            <TextField
                id="costo_vip"
                label="Costo Base VIP"
                type="number"
                variant="outlined"
                value={costoVip}
                onChange={(e) => setCostoVip(e.target.value)}
            />
            <TextField
                id="costo_premium"
                label="Costo Base Premium"
                type="number"
                variant="outlined"
                value={costoPremium}
                onChange={(e) => setCostoPremium(e.target.value)}
            />

        </Box>
    )
}
export default RegistroAviones
