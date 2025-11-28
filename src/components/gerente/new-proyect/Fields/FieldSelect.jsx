const FieldSelect = ({ id, label, required = false, value, onChange, options = [] }) => (
  <div className="n-p-form-group">
    <label htmlFor={id} className="n-p-label">
      {label} {required && <span className="n-p-required">*</span>}
    </label>
    <select
      id={id}
      className="n-p-select"
      required={required}
      value={value}
      onChange={onChange}
    >
      <option value="">Seleccionar {label.toLowerCase()}</option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default FieldSelect;
