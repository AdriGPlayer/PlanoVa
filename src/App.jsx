
import Login from "./components/login/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from './components/common/PrivateRoute'
import DashBoardCitys from "./components/panel-ciudades/DashBoardCitys";
import DashboardManager from "./components/gerente/dashgerente/DashboardManager";
import LayOutNewProyect from "./components/gerente/new-proyect/LayOutNewProyect";
import Proyects from "./components/gerente/proyects/view-proyects-pending/Proyects";
import LayOutComparativo from "./components/comprativo-obra/comparativo/LayOutComparativo";
import LayOutPresupuesto from "./components/comprativo-obra/comparativo/presupuesto/LayOutPresupuesto";


function App() {



  return (
    //tipos de usuario: GERENTE, ARQJR, ARQSR, ADM

    <>
    <BrowserRouter>
      <Routes>
        {/* Ruta publica */}
        <Route path="/" element={<Login />} />

        {/* Rutas Gerente */}
        <Route element={<PrivateRoute allowedRoles={["GERENTE"]}/>}>
          <Route path="/gerente/dashboard/:municipio" element = {<DashboardManager/>}/>
        </Route>

        <Route element={<PrivateRoute allowedRoles={["GERENTE"]}/>}>
          <Route element={<DashBoardCitys/>} path="/manager"/>
        </Route>

        <Route element={<PrivateRoute allowedRoles={["GERENTE"]}/>}>
          <Route element={<LayOutNewProyect/>} path="/manager/new-proyect"/>
        </Route>

        <Route element={<PrivateRoute allowedRoles={["GERENTE"]}/>}>
          <Route element={<Proyects/>} path="/manager/proyects/:municipio"/>
        </Route>
        <Route element={<PrivateRoute allowedRoles={["GERENTE"]}/>}>
          <Route element={<LayOutComparativo/>} path="/manager/comparativo"/>
        </Route>
        


        {/* Presupuestado */}
        <Route element={<LayOutPresupuesto/>} path="/presupuesto"/>

        

      </Routes>


    </BrowserRouter>
    </>
  )
}

export default App


// {
// 	"userType": "GERENTE",
// 	"status": "success"
// }