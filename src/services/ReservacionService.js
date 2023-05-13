import axios from 'axios';


class ReservacionService {
    postReservacion(payload){
        return axios.post("http://localhost:5000/reservacion", payload);
    }

    getMisReservaciones(user_id){
        return axios.get("http://localhost:5000/reservacion/user/"+user_id);
    }
}

export default new ReservacionService();