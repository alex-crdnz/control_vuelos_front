import React, { Fragment, useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import { Button } from "@mui/material";
import UseVuelosFiltrados from "../../hooks/UseVuelosFiltados"
import SearchIcon from '@mui/icons-material/Search';
import PaymentInfo from "./PaymentInfo";
import UseListAsientos from "../../hooks/UseListAsientos";
import vueloService from "../../services/VueloService";
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import AsientoService from "../../services/AsientoService";
import UserService from "../../services/UserService";
import ReservacionService from "../../services/ReservacionService";
import toastr from "toastr"

const getInitialForm = () => {
    return {
        "origen": "",
        "destino": "",
        "fechaSalida": "",
        "fechaLlegada": ""
    }
}

const Payment = (props) => {
    const user = (localStorage.getItem("user"));
    const password = (localStorage.getItem("password"));
    const [vuelos, setVuelos] = useState([]);
    const [payload, setPayload] = useState(getInitialForm());
    const [vuelosList, reload] = UseVuelosFiltrados(payload);
    const vue = JSON.parse(localStorage.getItem("vuelo"))
    const asiento = JSON.parse(localStorage.getItem("asientos"))
    const [tuaOrigen, settuaOrigen] = useState("");
    const [tuaDestino, settuaDestino] = useState("");
    const [tuaFinal, setTuaFinal] = useState(0);
    const [asientos, setAsientos] = useState([]);
    const asientosList = []
    const listaAuxiliar = []
    const auxpayload = {}
    const configuracion = {}
    let tua = 0
    const save = () => {
        UserService.getRole(user, password)
            .then((resp) => {
                if (resp.data["message"] === "Credenciales correctas") {
                    auxpayload["id_user"] = resp.data["id"]
                }
            })
        auxpayload["clave_reservacion"] = ("RS_" + makeid(8)).toUpperCase()
        auxpayload["status"] = "Activo"
        auxpayload["costo_total"] = Number(vue["costo_base"]) + (Number(vue["costo_base"]) * .16) +
            (Number(tuaOrigen)) + (Number(tuaDestino)) + (Number(tuaFinal))
        configuracion["vuelo"] = []
        asientos.map((row) => (
            configuracion["vuelo"].push({
                "clave_vuelo": row["clave_vuelo"],
                "clave_asiento": row["clave_asiento"]
            })
        ))
        auxpayload["configuracion"]=configuracion
        setPayload(auxpayload)
        ReservacionService.postReservacion(payload)
        .then(() => {
            toastr.success("Reservacion "+payload["clave_reservacion"]+" Creada correctamente")
            props.history.push("/inicio")
        })
    }
    const cancel = () => {
        props.history.push("/inicio")
    }

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    useEffect(() => {
        AsientoService.getAsientos({
            "clave": vue["clave_vuelo"]
        })
            .then((resp) => {
                asiento.forEach(asi => {
                    resp.data.forEach(element => {
                        if (element["clave_asiento"] == asi) {
                            let found = listaAuxiliar.indexOf(asi);
                            if (found == -1) {
                                asientosList.push({
                                    "clave_asiento": element["clave_asiento"],
                                    "clase": element["clase"],
                                    "costo_base": element["costo_base"],
                                    "clave_vuelo": vue["clave_vuelo"]
                                })
                                listaAuxiliar.push(asi)
                                tua += Number(element["costo_base"])
                                setTuaFinal(tua)
                            }
                        }
                    });
                });
            })
            .catch((error) => {
                console.log()
            })

        vueloService.getVuelos()
            .then((resp) => {
                resp.data.forEach(element => {
                    if (element["label"] == vue["origen"]) {
                        settuaOrigen(element["tua"])
                    }
                    if (element["label"] == vue["destino"]) {
                        settuaDestino(element["tua"])
                    }
                });
            })
            .catch((error) => {
                console.log()
            })
        setAsientos(asientosList)
    }, [])


    return (
        <Fragment>
            <Stack

            >
                <Box>
                    <PaymentInfo payload={payload} tuaOrigen={tuaOrigen}
                        tuaDestino={tuaDestino} asientosList={asientos} tuaFinal={tuaFinal} vuelos={vue} />
                </Box>

            </Stack>
            <Stack spacing={2} direction="row" display='flex' justifyContent='center'>
                <Button variant="contained" onClick={cancel} endIcon={<CancelIcon />}>Cancelar Reservacion</Button>
                <Button variant="contained" onClick={save} endIcon={<SendIcon />}>Agregar Reservacion</Button>
            </Stack>
        </Fragment>
    )
}
export default Payment;