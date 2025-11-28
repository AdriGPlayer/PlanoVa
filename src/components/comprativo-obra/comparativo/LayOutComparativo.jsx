import React from 'react';
import HeaderComarativo from '../header/HeaderComarativo';
import InfoProyect from '../header/InfoProyect';
import HeaderMonto from './monto/HeaderMonto';
import TableComparativo from './table/TableComparativo';
import ActionsTableComparativo from '../actions/ActionsTableComparativo';

const LayOutComparativo = () => {
    return (
        <>
            <div className='comparativo-budget-container'>
                <HeaderComarativo/>
                <InfoProyect/>
                <HeaderMonto/>
                <TableComparativo/>
                <ActionsTableComparativo/>
            </div>
        </>
    );
}

export default LayOutComparativo;
