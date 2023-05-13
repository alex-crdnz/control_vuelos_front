import axios from 'axios';


class AsientoService {

    getAsientos(clave){
        return axios.get("http://localhost:5000/asiento/"+clave["clave"]);
    }
}

export default new AsientoService();