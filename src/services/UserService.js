import axios from 'axios';


class UserService {
    login(credentials) {
        return axios.post(`http://localhost:5000/user/login`, {
            "email": credentials.user,
            "password": credentials.password
        });
    }
    postUsers(credentials) {
        return axios.post("http://localhost:5000/user", {
            "email": credentials.user,
            "password": credentials.password2,
            "name": credentials.name,
            "last_name": credentials.last_name,
            "status": "1"
        })
    }
}

export default new UserService();