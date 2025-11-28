import { motion } from "framer-motion";
const AlertsSection = () => {
  return (
    <div className="alerts-section-manager">
      <motion.div className="alert-manager alert-danger-manager"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        >

        <i className="fa-solid fa-clock"/>
        <div>
          <strong>Alerta de Presupuesto:</strong> 3 proyectos han excedido el presupuesto
          <span className="alert-projects-manager">
            Residencial Los Pinos, Torre Corporativa ABC, Plaza Comercial Norte
          </span>
        </div>
      </motion.div>

      <motion.div className="alert-manager alert-warning-manager"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <i className="fa-solid fa-triangle-exclamation"/>
        <div>
          <strong>Advertencia:</strong> 5 proyectos están al 90% del presupuesto
          <span className="alert-projects-manager">
            Casa Moderna XYZ, Remodelación Centro, Condominio Vista Mar
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AlertsSection;
