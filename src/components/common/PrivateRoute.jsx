import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({allowedRoles, redidectPath = '/'}) => {
    const userType = sessionStorage.getItem('userType');
    if(!userType || !allowedRoles.includes(userType)){
        return <Navigate to={redidectPath} replace />;
    }
    return <Outlet />;
}

export default PrivateRoute;
