import { useState } from "react";
import AuthService from "../../../service/AuthService";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await AuthService.login(username, password);
            if(response.data.status === "success"){
                sessionStorage.setItem("userType", response.data.userType);
                console.log(response.data.userType)
                switch(response.data.userType){
                    case "GERENTE":
                        navigate("/manager");   
                        break; 

                    // Agregar más casos según los tipos de usuario
                } 
            }   
        }catch (error){
            setError("Error de autenticación. Por favor, verifica tus credenciales.");
            console.error("Login error:", error);
        }
    }

    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}
                    <div className="form-group">
                        <label >Correo electrónico</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="username"
                            value={username}
                            onChange={(e)=> setUserName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-container">
                            <input type="checkbox" name="remember"/>
                            <span className="checkmark"></span>
                            Recordarme
                        </label>
                        <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button type="submit" className="btn-primary">
                        Iniciar Sesión
                    </button>
                </form>
        </>
    );
}

export default FormLogin;
