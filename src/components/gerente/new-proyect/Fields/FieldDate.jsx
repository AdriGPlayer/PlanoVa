const FieldDate = ({ id, label, required = true, value, onChange }) => (
  <div className="n-p-form-group">
    <label htmlFor={id} className="n-p-label">
      {label} {required && <span className="n-p-required">*</span>}
    </label>
    <input
      type="date"
      id={id}
      className="n-p-input"
      required={required}
      min={new Date().toISOString().split("T")[0]}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FieldDate;
