const FieldTextarea = ({ id, label, required = false, rows = 4, placeholder = "", value, onChange }) => (
  <div className="n-p-form-group n-p-full-width">
    <label htmlFor={id} className="n-p-label">
      {label} {required && <span className="n-p-required">*</span>}
    </label>
    <textarea
      id={id}
      className="n-p-textarea"
      rows={rows}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  </div>
);

export default FieldTextarea;
