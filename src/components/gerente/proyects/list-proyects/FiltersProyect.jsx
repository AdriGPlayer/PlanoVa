import FieldSelect from  '../../new-proyect/Fields/FieldSelect'
const FiltersProyect = ({ municipios, filters, setFilters }) => {

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="pp-filters">
      <div className="pp-search-box">
        <button className='btn-p-search'>Limpiar <i className="fa-solid fa-magnifying-glass"/></button>

        <div className="n-p-form-grid">

          <div className="n-p-form-group">
            <label className="n-p-label">Nombre Proyecto</label>
            <input
              type="text"
              id="nombre"
              className="pp-search-input"
              placeholder="Buscar Proyecto"
              value={filters.nombre}
              onChange={handleChange}
            />

          </div>

          <FieldSelect
            id="idMunicipio"
            label="Municipio"
            value={filters.idMunicipio}
            
            options={municipios.map(m => ({
              value: m.id,
              label: m.nombre,
            }))}
            onChange={handleChange}
          />

        </div>
      </div>
    </div>
  );
};

export default FiltersProyect;