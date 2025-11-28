import { motion } from "framer-motion";
const HeaderManager = ({municipio}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}>
      <header className="dashboard-header-manager">
      <h1>Dashboard Gerencial</h1>
      {/* <h2>Plaza: {municipio}</h2> */}
      <p className="subtitle-manager">Panel de control ejecutivo - PlanoVa</p>
      </header>
  </motion.div>
  
);

export default HeaderManager;
