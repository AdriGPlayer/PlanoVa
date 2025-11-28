import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const LogOut = () => {
    const navigate = useNavigate()


    const salir = () =>{
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <>
            <motion.div
                className="logout-container"
                initial={{ x: "100vh", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
                <button className="logout-btn" onClick={salir}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Salir
                </button>
            </motion.div>
        </>
    );
}

export default LogOut;
