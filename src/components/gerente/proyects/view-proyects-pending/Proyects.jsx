
import HeaderProyects from "../header-proyects/HeaderProyects";
import { useParams } from "react-router-dom";
import FiltersProyect from "../list-proyects/FiltersProyect";
import { useEffect, useState } from "react";
import MunicipioService from "../../../../service/MunicipioService";
import ListProyects from "../list-proyects/ListProyects";

const Proyects = () => {
    const {municipio} = useParams();
    const [municipios, setMunicipios] = useState([]);

    //filtros globales
    const [filters, setFilters] = useState({
        nombre: "",
        idMunicipio: ""
    });

    useEffect(() => {
        MunicipioService.getMunicipios()
          .then((res) => setMunicipios(res.data))
          .catch((err) => console.error("Error al cargar municipios:", err));
          
    }, []);
    return (
        <>
            
            <div className="pp-container">
                <HeaderProyects municipio={municipio}/>
                <FiltersProyect municipios={municipios} filters = {filters} setFilters={setFilters}/>

                <ListProyects municipio={municipio} filters={filters}/>
            </div>
            
        </>
    );
}

export default Proyects;
