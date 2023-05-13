import axios from 'axios';


class UserService {
    login(credentials) {
        return axios.post(`http://localhost:5000/user/login`, {
            "email": credentials.user,
            "password": credentials.password
        });
    }

    getRole(user, password) {
        let dict = {
            "email":JSON.parse(user),
            "password":JSON.parse(password)
        }
        return axios.post(`http://localhost:5000/user/login`, dict);
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