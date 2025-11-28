import Logo from "../../common/Logo";
import FormLogin from "./FormLogin";
import { motion } from "framer-motion";
const LayOutFormLogin = () => {
    return (
        <>
            <motion.div className="form-section"
                initial={{ y: "-100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
                <div className="form-content">
                    <Logo />
                    <div className="welcome-text">
                        <h1>Bienvenido de nuevo</h1>
                    </div>
                    <FormLogin />
                
                </div>
            </motion.div>
        </>
    );
}

export default LayOutFormLogin;
