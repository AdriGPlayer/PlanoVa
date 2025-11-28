
import {  useEffect, useState } from "react";
import LogOut from "../common/LogOut";
import { motion } from "framer-motion";
import MunicipioService from "../../service/MunicipioService";
import { useNavigate } from "react-router-dom";

const DashBoardCitys = () => {
  const navigate = useNavigate();

  const handleCitySelect = (municipio) => {
    navigate(`/gerente/dashboard/${municipio}`);
  } 

  const [municipio, setMunicipio] = useState([]);
  const colorMap = {
      orange: "orange",
      wine: "#722f37", // vino
      green: "green",
      blue: "blue",
      yellow: "rgb(203, 201, 50)",
      red: "red",
      purple: "purple"
  }
  useEffect(() => {
      MunicipioService.getMunicipios()
                      .then((response) => setMunicipio(response.data))
                      .catch((error) => console.error("Error al cargar municipios" + error))
  },[])
  const directions = [
    { x: "-100vw", y: 0 }, // desde la izquierda
    { x: "100vw", y: 0 },  // desde la derecha
    { x: 0, y: "-100vh" }, // desde arriba
    { x: 0, y: "100vh" },  // desde abajo
    { x: "-100vw", y: "-100vh" }, // diagonal arriba-izquierda
    { x: "100vw", y: "100vh" },   // diagonal abajo-derecha
  ];

  return (
    <main className="main-content-city">
      <LogOut />
      <div className="page-header-city">
        <h2 className="page-title-city">Selecciona un Municipio</h2>
        <p className="page-subtitle-city">
          Gestiona proyectos arquitectónicos por región
        </p>
      </div>

      <div className="cities-grid">
        {municipio.map((municipio, index) => {
          const direction = directions[index % directions.length];
          return (
            <motion.div
              key={index}
              className="city-card"
              data-color={municipio.color}
              initial={{ ...direction, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 12,
                delay: index * 0.05,
              }}
            >
              <div className="city-image">
                <img src={municipio.imagen}  />
              </div>
              <div className="city-content">
                <h3 className="city-name">{municipio.nombre}</h3>
                <div className="city-stats">
                  <div className="stat-badge">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M2 14V6L8 2L14 6V14H10V10H6V14H2Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* <span>{muni.proyectosPendientes} Proyectos pendientes</span> */}
                  </div>
                  <button className="btn-select-city"
                          style={{
                            backgroundColor: colorMap[municipio.color] || municipio.color || "#666",
                            color:"#FFF"
                          }}
                          onClick={()=>{handleCitySelect(municipio.nombre)}}
                  >Administrar Proyectos</button>
                </div>
              </div>
              <div className="city-accent"></div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
};

export default DashBoardCitys;