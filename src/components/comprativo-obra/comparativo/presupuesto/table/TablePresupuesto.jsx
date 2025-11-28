import React from 'react';

const TablePresupuesto = () => {

    const materiales = [
        {
            material: "Cemento",
            descripcion: "Cemento Portland gris 50kg",
            precio: 185.00,
            cantidad: 150
        },
        {
            material: "Arena",
            descripcion: "Arena fina por m³",
            precio: 320.00,
            cantidad: 10
        },
        {
            material: "Grava",
            descripcion: "Grava gruesa por m³",
            precio: 350.00,
            cantidad: 8
        }
    ];

    return (
        <>
            <div className="material-table-container">
                <div className="material-table">
                    
                    <table className='material-table'>
                        <thead>
                            <tr>
                                <th>Material</th>
                                <th>Descripción</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad Requerida</th>
                                <th>Total</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {materiales.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.material}</td>
                                    <td>{item.descripcion}</td>
                                    <td>${item.precio.toFixed(2)}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${(item.precio * item.cantidad).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>

                                    <td>
                                        <div className="material-actions">
                                            <button className="material-btn-edit" title="Editar">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <button className="material-btn-delete" title="Eliminar">
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default TablePresupuesto;
