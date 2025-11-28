import React from 'react';
import HeaderPresupuesto from './header/HeaderPresupuesto';
import TablePresupuesto from './table/TablePresupuesto';
import FormPresupuesto from './form/FormPresupuesto';
import BackPresupuesto from './../../../common/BackPresupuesto'
const LayOutPresupuesto = () => {
    return (
        <>
          <div className="material-container">
                <BackPresupuesto/>
                <HeaderPresupuesto/>
                <TablePresupuesto/>
                <FormPresupuesto/>
          </div>  
        </>
    );
}

export default LayOutPresupuesto;
