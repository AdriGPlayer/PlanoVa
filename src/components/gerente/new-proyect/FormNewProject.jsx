import { useState } from "react";
import FieldTextarea from "./Fields/FieldTextarea";
import FieldSelect from "./Fields/FieldSelect";
import FieldCurrency from "./Fields/FieldCurrency";
import FieldDate from "./Fields/FieldDate";
import ProyectoService from "../../../service/ProyectoService";
import { useNavigate } from "react-router-dom";

const FormNewProject = ({ municipios, empleados }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    idMunicipio: "",
    idResponsable: "",
    presupuesto: "",
    fechaInicio: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const proyectoData = {
      idMunicipio: parseInt(formData.idMunicipio),
      idResponsable: parseInt(formData.idResponsable),
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      fechaInicio: formData.fechaInicio,
      presupuesto: parseFloat(formData.presupuesto || 0),
      estatus: "REGISTRADO", // se asigna por defecto
    };

    console.log("Datos que se enviarán:", proyectoData);

    ProyectoService.save(proyectoData)
      .then((res) => console.log("Proyecto guardado:", res))
      .catch((err) => console.error("Error al guardar proyecto:", err));
    navigate(-1);

  };

  return (
    <form className="n-p-form" onSubmit={handleSubmit}>
      <div className="n-p-form-grid">

        <FieldTextarea
          id="nombre"
          label="Nombre del Proyecto"
          required
          placeholder="Ej: Residencial Vista Hermosa"
          value={formData.nombre}
          onChange={handleChange}
        />

        <FieldSelect
          id="idMunicipio"
          label="Municipio"
          required
          value={formData.idMunicipio}
          options={municipios.map((m) => ({
            value: m.id,
            label: m.nombre,
          }))}
          onChange={handleChange}
        />

        <FieldSelect
          id="idResponsable"
          label="Responsable"
          required
          value={formData.idResponsable}
          options={empleados.map((e) => ({
            value: e.id,
            label: `${e.nombre} ${e.apellidoPaterno || ""} ${e.apellidoMaterno || ""}`,
          }))}
          onChange={handleChange}
        />

        <FieldCurrency
          id="presupuesto"
          label="Presupuesto"
          value={formData.presupuesto}
          onChange={handleChange}
        />

        <FieldDate
          id="fechaInicio"
          label="Fecha de Inicio"
          required
          value={formData.fechaInicio}
          onChange={handleChange}
        />

        <FieldTextarea
          id="descripcion"
          label="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
        />
      </div>

      <div className="n-p-form-actions">
        <button
          type="button"
          className="n-p-btn n-p-btn-secondary"
          onClick={() => window.history.back()}
        >
          Cancelar
        </button>
        <button type="submit" className="n-p-btn n-p-btn-primary">
          Registrar Proyecto
        </button>
      </div>
    </form>
  );
};

export default FormNewProject;
