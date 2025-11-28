import axios from "axios"

const API_URL = 'http://localhost:8000/municipio'  


class MunicipioService {
    getMunicipios(){
        return axios.get(`${API_URL}/getMunicipios`)
    }
    getNames(){
        return axios.get(`${API_URL}/getNames`)
    }
    getId(municipio){
        return axios.get(`${API_URL}/getId/${municipio}`)
    }

}


export default new MunicipioService();