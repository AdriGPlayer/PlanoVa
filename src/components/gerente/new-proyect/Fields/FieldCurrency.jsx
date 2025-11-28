const FieldCurrency = ({ id, label, required = true, value, onChange }) => (
  <div className="n-p-form-group">
    <label htmlFor={id} className="n-p-label">
      {label} {required && <span className="n-p-required">*</span>}
    </label>
    <div className="n-p-input-group">
      <span className="n-p-input-prefix">$</span>
      <input
        type="number"
        id={id}
        className="n-p-input n-p-input-with-prefix"
        placeholder="0.00"
        step="0.01"
        min="0"
        required={required}
        value={value}
        onChange={onChange}
      />
      <span className="n-p-input-suffix">MXN</span>
    </div>
  </div>
);

export default FieldCurrency;
