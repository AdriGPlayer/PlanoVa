import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const QuickActions = ({municipio}) => {

  
  const navigate = useNavigate();


  const handleNavigation = (path) => {
    navigate(path);
  }


  return (
    <motion.div className="quick-actions-manager"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <button className="action-btn-manager action-quote-manager" onClick={() => handleNavigation("/manager/new-proyect")}>
        <i className="fa-solid fa-folder-plus"/>
        Nuevo Proyecto
      </button>
      <button className="action-btn-manager action-projects-manager" onClick={() => handleNavigation(`/manager/proyects/${municipio}`)}>
        <i className="fa-solid fa-house"/>
        Ver Proyectos en Curso
      </button>
      <button className="action-btn-manager action-employees-manager" onClick={() => handleNavigation("/manager/empleados")}>
        <i className="fa-solid fa-user-tie"/>
        Administrar Empleados
      </button>
      <button className="action-btn-manager action-reports-manager" onClick={() => handleNavigation("/manager/reports")}>
        <i className="fa-solid fa-chart-line"/>
        Ver Reportes
      </button>
      <button className="action-btn-manager action-budget-manager" onClick={() => handleNavigation("/manager/historial/proyectos")}>
        <i className="fa-solid fa-wallet"/>
        Historial de Proyectos
      </button>
    </motion.div>
  );
};

export default QuickActions;
