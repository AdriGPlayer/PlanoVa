import axios from 'axios';

const API_URL = 'http://localhost:8000/auth';


class AuthService{

    login(username, password){
        return axios.post(API_URL + '/login', { username:username, password: password });
    }
}

export default new AuthService();