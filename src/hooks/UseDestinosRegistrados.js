import { useState, useEffect } from 'react';
import VueloService from '../services/VueloService';

function UseDestinosRegistrados() {

    const [destinosList, setDestinosList] = useState([]);

    function load() {
        VueloService.getVuelos()
            .then((resp) => {
                setDestinosList(resp.data);
            })
    }

    function reload() {
        load();
    }

    useEffect(() => {
        load();
    }, []);

    return [destinosList, reload];
}

export default UseDestinosRegistrados;