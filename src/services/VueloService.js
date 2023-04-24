import axios from 'axios';


class VueloService {
    getVuelos(){
        return axios.get("http://localhost:5000/vuelo/origenes_destinos");
    }

    postVuelos(payload){
        payload["fecha_salida"]=payload["fecha_salida"].replace("T", " ")
        payload["fecha_llegada"]=payload["fecha_llegada"].replace("T", " ")
        return axios.post("http://localhost:5000/vuelo", payload);
    }

    deleteVuelos(payload){
        return axios.delete("http://localhost:5000/vuelo/"+payload["clave_vuelo"]);
    }

    getVuelosRegistrados(){
        return axios.get("http://localhost:5000/vuelo");
    }

    postDestino(payload){
        return axios.post("http://localhost:5000/vuelo/crear/"+payload["clave"]+"/"+payload["destino"]);
    }

    deleteDestino(payload){
        return axios.delete("http://localhost:5000/vuelo/destino/"+payload["clave"]);
    }

}

export default new VueloService();