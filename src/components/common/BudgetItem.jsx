const BudgetItem = ({ budget }) => {
  const getBadgeClass = (status) => {
    if (status === "Excedido") return "badge-danger-manager";
    if (status === "Advertencia") return "badge-warning-manager";
    if (status === "En Control") return "badge-success-manager";
    return "";
  };

  const getProgressClass = (status) => {
    if (status === "Excedido") return "progress-danger-manager";
    if (status === "Advertencia") return "progress-warning-manager";
    if (status === "En Control") return "progress-success-manager";
    return "";
  };

  return (
    <div className={`budget-item-manager budget-${statusToClass(budget.status)}-manager`}>
      <div className="budget-header-manager">
        <h4>{budget.name}</h4>
        <span className={`budget-badge-manager ${getBadgeClass(budget.status)}`}>{budget.status}</span>
      </div>

      <div className="budget-amounts-manager">
        <div className="budget-detail-manager">
          <span className="budget-label-manager">Presupuestado:</span>
          <span className="budget-value-manager">${budget.planned.toLocaleString()}</span>
        </div>
        <div className="budget-detail-manager">
          <span className="budget-label-manager">Gastado:</span>
          <span className="budget-value-manager">${budget.spent.toLocaleString()}</span>
        </div>
      </div>

      <div className="progress-bar-manager">
        <div
          className={`progress-fill-manager ${getProgressClass(budget.status)}`}
          style={{ width: `${budget.percent}%` }}
        ></div>
      </div>

      <span className="budget-percent-manager">{budget.percent}% del presupuesto</span>
    </div>
  );
};

const statusToClass = (status) => {
  if (status === "Excedido") return "exceeded";
  if (status === "Advertencia") return "warning";
  if (status === "En Control") return "good";
  return "default";
};

export default BudgetItem;
