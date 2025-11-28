import React from 'react';

const HeaderPresupuesto = () => {
    return (
        <>
            <div className="material-header">
                <div className="material-logo">
                    <i className='fas fa-house'></i>
                </div>    
                <span className='material-logo-text'>PlanoVa</span>
                <div className="material-info-grid">
                <div className="material-info-item">
                    <span className="material-info-label">Tipo Presupuesto:</span>
                    <span className="material-info-value">Matereales Generales</span>
                </div>
                <div className="material-info-item">
                    <span className="material-info-label">Proyecto:</span>
                    <span className="material-info-value">Residencial del bosque</span>
                </div>
                <div className="material-info-item">
                    <span className="material-info-label">Municipio:</span>
                    <span className="material-info-value">Cordoba</span>
                </div>
                <div className="material-info-item">
                    <span className="material-info-label">Arquitecto Asignado:</span>
                    <span className="material-info-value">Martin Guevara</span>
                </div>

            </div>  
            </div> 
            
        </>
    );
}

export default HeaderPresupuesto;
