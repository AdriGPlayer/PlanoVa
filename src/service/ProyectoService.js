import axios from 'axios';

const API_URL = 'http://localhost:8000/proyecto';


class ProyectoService{

    save(proyecto){
        return axios.post(`${API_URL}/save`, proyecto);
    }
    getByEstatusNot(estatus){
        return axios.get(`${API_URL}/getProyectosByEstatusNot/${estatus}`);
    }

    getByMunicipio(municipio){
        return axios.get(`${API_URL}/getProyectosByMunicipio/${municipio}`)
    }
    getByNombre(nombre){
        return axios.get(`${API_URL}/getProyectoByNombre/${nombre}`)
    }
    getByNombreAndMunicipio(nombre, municipio){
        return axios.get(`${API_URL}/getProyectoByNombreAndMunicipio/${nombre}/${municipio}`)
    }
}

export default new ProyectoService();