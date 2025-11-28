const FieldText = ({ id, label, required = false, placeholder = "", value, onChange }) => (
  <div className="n-p-form-group n-p-full-width">
    <label htmlFor={id} className="n-p-label">
      {label} {required && <span className="n-p-required">*</span>}
    </label>
    <input
      type="text"
      id={id}
      className="n-p-input"
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FieldText;
