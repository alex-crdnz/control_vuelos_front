import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const BuscarVuelo = ({ vuelos, payload, setPayload, aviones }) => {
    const [vueloOrigen, setVueloOrigen] = useState("");
    const [vueloDestino, setVueloDestino] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [fechaLlegada, setFechaLlegada] = useState("");
    const [typeVuelo, setTypeVuelo] = useState(false);

    useEffect(() => {
        setPayload({
            origen: vueloOrigen,
            destino: vueloDestino,
            fecha_salida: fechaSalida,
            fecha_llegada: fechaLlegada,
            typeVuelo: typeVuelo
        });

    }, [vueloOrigen, vueloDestino, fechaSalida, fechaLlegada])

    const save = () => {
        setTypeVuelo(!typeVuelo)
    }
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
                <TextField
                    sx={{
                        width: { sm: 200, md: 300 },
                        "& .MuiInputBase-root": {
                            height: 80
                        }
                    }}
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
                    sx={{
                        width: { sm: 200, md: 300 },
                        "& .MuiInputBase-root": {
                            height: 80
                        }
                    }}
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
            </Grid>
            <Grid>
                <TextField
                    sx={{
                        width: { sm: 200, md: 300 },
                        "& .MuiInputBase-root": {
                            height: 80
                        }
                    }}
                    id="outlined-basic"
                    label="Fecha Salida "
                    type="date"
                    defaultValue="YYYY-MM-DD"
                    className={"DatePicker"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)}
                />
                <TextField
                    sx={{
                        width: { sm: 200, md: 300 },
                        "& .MuiInputBase-root": {
                            height: 80
                        }
                    }}
                    id="outlined-basic"
                    label="Fecha Llegada"
                    type="date"
                    defaultValue="YYYY-MM-DD"
                    className={"DatePicker"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={fechaLlegada} onChange={(e) => setFechaLlegada(e.target.value)}
                />
            </Grid>
            {/* <Grid>
                <FormControlLabel control={<Switch onChange={save}/>} label="Vuelo Redondo" />
            </Grid> */}

        </Box>
    )
}
export default BuscarVuelo;
