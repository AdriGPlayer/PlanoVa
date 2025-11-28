import { useEffect, useState } from "react";
import ProyectoService from "../../../../service/ProyectoService";
import MunicipioService from "../../../../service/MunicipioService";
const ListProyects = ({ municipio, filters }) => { 

  const [proyectos, setProyectos] = useState([]);
  const [porcentaje, setPorcentaje] = useState(0);
  useEffect(() => {
  // Este es el porcentaje, hay que hacerlo dinamico
  setPorcentaje(0);

    const fetchData = async () => {
      try {
        if(filters.nombre.trim() !== "" && filters.idMunicipio.trim() === ""){      
          const res = await ProyectoService.getByNombre(filters.nombre);
          setProyectos(res.data);
          return;
        }else if(filters.nombre.trim() === "" && filters.idMunicipio !== ""){
          const res = await ProyectoService.getByMunicipio(filters.idMunicipio);
          setProyectos(res.data);
          console.log("Entro solo al filtro de municipio");
          return;
        }else if(filters.nombre.trim() !== "" && filters.idMunicipio !== ""){
          const res = await ProyectoService.getByNombreAndMunicipio(filters.nombre, filters.idMunicipio)
          setProyectos(res.data);
          console.log("Entro a nombre mas municipio")
          return;
        }


        const idMunicipio = await MunicipioService.getId(municipio);
        
        const data = await ProyectoService.getByMunicipio(idMunicipio.data); 

        setProyectos(data.data); 
        } catch (error) {
        console.error("Error al cargar proyectos: ", error);
      }
    };

    fetchData();
  }, [municipio, filters.nombre, filters.idMunicipio]); 
  

  return (
    
    <div className="pp-projects-list">
       {proyectos.map((p, i) => (
        <div className="pp-project-card" key={i}>
          <div className="pp-project-info">
            <div className="pp-project-main">
              <h3 className="pp-project-name">{p.nombre}</h3>

              <span className="pp-project-municipality">
                Municipio ID: {p.idMunicipio}
              </span>
            </div>

            <div className="pp-project-details">
              <div className="pp-detail-item">
                
                  <i className="fa-solid fa-calendar-days"/>
                <span className="pp-detail-text">Inicio: {p.fechaInicio}</span>
              </div>

              <div className="pp-detail-item">
                <span className="pp-status-badge">
                  {p.estatus}
                </span>
              </div>
            </div>
          </div>

          
          <div className="pp-project-progress">
            <div className="pp-progress-header">
              <span className="pp-progress-label">Progreso</span>
              <span className="pp-progress-value">{porcentaje}%</span>
            </div>
            <div className="pp-progress-bar">
              <div
                className="pp-progress-fill"
                style={{ width: `${porcentaje}%` }}

              ></div>
            </div>
          </div>

          <div className="pp-project-actions">
            <button className="pp-action-btn pp-btn-view" title="Ver detalles">
              <i className="fa-regular fa-eye"/>
              Ver
            </button>

            <button className="pp-action-btn pp-btn-edit" title="Editar proyecto">
              <i className="fa-solid fa-pen-to-square"/>
              Editar
            </button>

            <button className="pp-action-btn pp-btn-cancel" title="Cancelar proyecto">
              <i className="fa-solid fa-trash-can"/>
              Borrar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ListProyects;