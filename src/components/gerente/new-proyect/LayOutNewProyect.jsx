import { useEffect, useState } from "react";
import MunicipioService from "../../../service/MunicipioService";
import EmpleadoService from "../../../service/EmpleadoService";

import FormNewProject from "./FormNewProject";
import { motion } from "framer-motion";

const LayOutNewProyect = () => {
  const [municipios, setMunicipios] = useState([]);
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    MunicipioService.getMunicipios()
      .then((res) => setMunicipios(res.data))
      .catch((err) => console.error("Error al cargar municipios:", err));

    EmpleadoService.getAll()
      .then((res) => setEmpleados(res.data))
      .catch((err) => console.error("Error al cargar empleados:", err));
  }, []);

  return (
    <motion.div 
    initial={{ y: "-100vh", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
        type: "tween",
        duration: 0.8,
        ease: "easeOut"
     }}
    className="n-p-cont">
      <div className="n-p-container">

        <div className="n-p-header">
          <h1 className="n-p-title">Registrar Nuevo Proyecto</h1>
        </div>

        <FormNewProject municipios={municipios} empleados={empleados} />
      </div>
    </motion.div>
  );
};

export default LayOutNewProyect;
