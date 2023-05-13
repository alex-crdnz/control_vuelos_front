import { useState, useEffect } from 'react';
import AsientoService from '../services/AsientoService';

function UseListAsientos() {
    const [asientos, setAsientos] = useState("");
    function load() {
        setAsientos(String(JSON.parse(localStorage.getItem("vuelo"))))
    }

    function reload() {
        load();
    }

    useEffect(() => {
        reload();
    }, []);

    return [asientos, reload];
}

export default UseListAsientos;