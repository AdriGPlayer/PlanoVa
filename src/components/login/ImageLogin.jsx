import { motion } from "framer-motion";
const ImageLogin = () => {
    return (
        <>
            <motion.div className="image-section"
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
            
            
                <div className="image-overlay">
                    <div className="overlay-content">
                        <h2>Gestión de proyectos arquitectónicos</h2>
                        <p>Organiza, colabora y lleva tus diseños al siguiente nivel con PlanoVa</p>
                        <div className="feactures">
                            <div className="feacture-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Gestión de proyectos en tiempo real</span>
                            </div>
                            <div className="feacture-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Colaboración con tu equipo</span>
                            </div>
                            <div className="feacture-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>Seguimiento de presupuestos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>   
        </>
    );
}

export default ImageLogin;
