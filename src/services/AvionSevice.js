import axios from 'axios';


class AvionService {

    postAvion(payload){
        return axios.post("http://localhost:5000/avion/form", payload);
    }
    getAviones(){
        return axios.get("http://localhost:5000/avion");
    }

    deleteAvion(payload){
        return axios.delete("http://localhost:5000/avion/"+payload["modelo"]);
    }
}

export default new AvionService();