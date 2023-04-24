import { useState, useEffect } from 'react';
import VueloService from '../services/VueloService';

function useVuelosRegistrados() {

    const [vuelosList, setVuelosList] = useState([]);

    function load() {
        VueloService.getVuelosRegistrados()
            .then((resp) => {
                setVuelosList(resp.data);
            })
            .catch((error) => {
                console.log(error)
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