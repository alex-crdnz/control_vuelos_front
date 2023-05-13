import { useState, useEffect } from 'react';
import VueloService from '../services/VueloService';

function useVuelosRegistrados(payload) {

    const [vuelosList, setVuelosList] = useState([]);

    function load() {
        VueloService.getVueloFecha(payload)
            .then((resp) => {
                setVuelosList(resp.data);
            })
    }

    function reload() {
        load();
    }

    useEffect(() => {
        load();
    }, []);

    return [vuelosList, reload];
}

export default useVuelosRegistrados;