import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
const Back = () => {
    const naviate = useNavigate();

    const habdleBack = () => {
        naviate(-1);
    }

    return (
        <>
            <motion.div
                className="logout-container"
                initial={{ x: "-100vh", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
                <button className="back-btn" onClick={habdleBack}>
                    <i className="fa-solid fa-backward-step"></i>
                    Atras
                </button>
            </motion.div>
        </>
    );
}

export default Back;
