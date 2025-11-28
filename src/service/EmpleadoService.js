import axios from 'axios';

const API_URL = 'http://localhost:8000/empleado';


class EmpleadoService{

    getAll(){
        return axios.get(`${API_URL}/getAll`);
    }
}

export default new EmpleadoService();