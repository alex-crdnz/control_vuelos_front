import { useState, useEffect } from 'react';
import AvionSevice from '../services/AvionSevice';

function UseAvionesRegistrados() {

    const [avionesList, setAvionesList] = useState([]);

    function load() {
        AvionSevice.getAviones()
            .then((resp) => {
                setAvionesList(resp.data);
            })
    }

    function reload() {
        load();
    }

    useEffect(() => {
        load();
    }, []);

    return [avionesList, reload];
}

export default UseAvionesRegistrados;