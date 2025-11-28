import { useNavigate } from "react-router-dom";
const ActionsTableComparativo = () => {
    const navigate = useNavigate();

    const habdleBack = () => {
        navigate(-1);
    }
 

    return (
        <>
            <div className="comparativo-actions">
                <button className="comparativo-btn comparativo-btn-secondary" onClick={habdleBack}>Regresar</button>
                <button className="comparativo-btn comparativo-btn-primary">Generar Reporte</button>
            </div>
        </>
    );
}

export default ActionsTableComparativo;
