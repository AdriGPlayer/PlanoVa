import TotalRowComparativo from "./TotalRowComparativo";

const TableComparativo = () => {
    
    const data = [
        {
            tipo: "Materiales Generales",
            presupuestado: "$456,432",
            ejecutado: "$380,500.00",
            porcentaje: "84.5%",
            semaforo: "verde"
        },
        {
            tipo: "Materiales Petreos",
            presupuestado: "$456,432",
            ejecutado: "$380,500.00",
            porcentaje: "84.5%",
            semaforo: "rojo"
        },
        {
            tipo: "Mano de Obra",
            presupuestado: "$456,432",
            ejecutado: "$380,500.00",
            porcentaje: "84.5%",
            semaforo: "rojo"
        },
        {
            tipo: "Herramienta Menor",
            presupuestado: "$456,432",
            ejecutado: "$380,500.00",
            porcentaje: "84.5%",
            semaforo: "amarillo"
        },
        {
            tipo: "Maquinaria",
            presupuestado: "$456,432",
            ejecutado: "$380,500.00",
            porcentaje: "84.5%",
            semaforo: "amarillo"
        },
        {
            tipo: "Gastos Indirectos",
            presupuestado: "$456,432",
            ejecutado: "$380,500.00",
            porcentaje: "84.5%",
            semaforo: "amarillo"
        }
    ];

    return (
        <div className="comparativo-table-container">
            <table className="comparativo-budget-table">
                <thead className="comparativo-header-encabezados">
                    <tr>
                        <th className="comparativo-header-ejecutado">TIPO</th>
                        <th className="comparativo-header-presupuestado">PRESUPUESTADO</th>
                        <th className="comparativo-header-ejecutado">EJECUTADO</th>
                        <th className="comparativo-header-porcentaje">% EJECUTADO</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="comparativo-concept">{row.tipo}</td>

                            <td className="comparativo-amount-cell">
                                <button className="comparativo-edit-btn">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                                <span className="comparativo-amount">{row.presupuestado}</span>
                            </td>

                            <td className="comparativo-executed">{row.ejecutado}</td>

                            <td className="comparativo-percentage">
                                <div className="comparativo-percentage-content">
                                    <span className={`comparativo-semaforo comparativo-semaforo-${row.semaforo}`}></span>
                                    <span>{row.porcentaje}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                    <TotalRowComparativo/>
                </tbody>
            </table> 
        </div>
    );
};

export default TableComparativo;
