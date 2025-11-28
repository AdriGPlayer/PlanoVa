import{useNavigate} from 'react-router-dom';
const HeaderProyects = ({municipio}) => {
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate(-1);
    }
    const goToNewProyect = () => {
        navigate('/manager/new-proyect')
    }
    return (
        <>
            <div className="pp-header">
                <div className="pp-header-content">
                    <h1 className="pp-title">Proyectos Pendientes</h1>
                    <p className="pp-subtitle">Gestiona y supervisa los proyectos en curso</p>
                    <p className="pp-subtitle">Municipio: {municipio}</p>
                </div>
                <div className="pp-header actions">
                    <button className="pp-btn pp-btn-primary"
                        onClick={goToDashboard}>
                        <i className="fa-solid fa-chart-line"/> Volver al Dashboard
                    </button>
                    <button className="pp-btn pp-btn-primary"
                        onClick={goToNewProyect}>
                        <i  className="fa-solid fa-plus"/> Nuevo Proyecto
                    </button>
                </div>
            </div>   
        </>
    );
}

export default HeaderProyects;
