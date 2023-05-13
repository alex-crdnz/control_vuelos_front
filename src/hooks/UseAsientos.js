import { useState, useEffect } from 'react';
import AsientoService from '../services/AsientoService';

function UseAsientos(clave) {

    const [asientos, setAsientos] = useState([]);

    function load() {
        AsientoService.getAsientos(clave)
            .then((resp) => {
                setAsientos(resp.data);
            })
    }

    function reload() {
        load();
    }

    useEffect(() => {
        load();
    }, []);

    return [asientos, reload];
}

export default UseAsientos;