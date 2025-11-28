import React, { useState } from "react";

const FormPresupuesto = ({ onAddMaterial }) => {
    const [total, setTotal] = useState(0);
    const [form, setForm] = useState({
        material: "",
        descripcion: "",
        precio: "",
        cantidad: ""
    });

    const calculaToTal = (precioR, cantidadC) => {
        const totalCalc = Number(precioR) * Number(cantidadC);
        setTotal(totalCalc);
    };

    const handleAgregar = (obj) => {
        calculaToTal(obj.precio, obj.cantidad);

        // Si quieres que el form también se actualice
        setForm(prev => ({
            ...prev,
            precio: obj.precio,
            cantidad: obj.cantidad
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Actualiza el form
        const updatedForm = { ...form, [name]: value };
        setForm(updatedForm);

        // Llama a handleAgregar para recalcular total
        handleAgregar(updatedForm);
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (onAddMaterial) {
            onAddMaterial({
                ...form,
                precio: parseFloat(form.precio),
                cantidad: parseInt(form.cantidad),
                total: total
            });
        }

        // Limpia el formulario
        setForm({
            material: "",
            descripcion: "",
            precio: "",
            cantidad: ""
        });

        setTotal(0);
    };

    return (
        <div className="material-form-container">
            <h3 className="material-form-title">Agregar Nuevo Material</h3>

            <form className="material-form" onSubmit={handleSubmit}>
                <div className="material-form-grid">

                    <div className="material-form-group">
                        <label htmlFor="material">Material</label>
                        <input
                            type="text"
                            id="material"
                            name="material"
                            placeholder="Nombre del material"
                            required
                            value={form.material}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="material-form-group">
                        <label htmlFor="descripcion">Descripción</label>
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            placeholder="Descripción detallada"
                            required
                            value={form.descripcion}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="material-form-group">
                        <label htmlFor="precio">Precio Unitario</label>
                        <input
                            type="number"
                            id="precio"
                            name="precio"
                            placeholder="0.00"
                            step="0.01"
                            min="0"
                            required
                            value={form.precio}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="material-form-group">
                        <label htmlFor="cantidad">Cantidad Requerida</label>
                        <input
                            type="number"
                            id="cantidad"
                            name="cantidad"
                            placeholder="0"
                            min="1"
                            required
                            value={form.cantidad}
                            onChange={handleChange}
                        />
                    </div>

                </div>

                <div className="material-form-actions">
                    <div className="material-info-item-total">
                        <span className="material-info-label">Total:</span>
                        <span className="material-info-value">$ {total}</span>
                    </div>

                    <button type="submit" className="material-btn-add">
                        <i className="fa-solid fa-plus"/>
                        Agregar Material
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormPresupuesto;
