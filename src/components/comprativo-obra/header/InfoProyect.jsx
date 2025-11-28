import React from 'react';

const InfoProyect = () => {
    const info = {
        obra: "Construccion Plaza Comercial Centro",
        municipio: "Cordoba",
        numero: "PRO-2025-001"
    }
    return (
        <>
            <div className="comparativo-project-info">
                <div className="comparativo-info-item">
                    <label>Obra: </label>
                    <span>{info.obra}</span>
                </div>
                <div className="comparativo-info-item">
                    <label>Municipio: </label>
                    <span>{info.municipio}</span>
                </div>
                <div className="comparativo-info-item">
                    <label>No: </label>
                    <span>{info.numero}</span>
                </div>
            </div>
        </>
    );
}

export default InfoProyect;
