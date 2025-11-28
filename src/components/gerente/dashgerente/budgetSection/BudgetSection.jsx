import BudgetItem from "../../../common/BudgetItem";

const BudgetSection = () => {
  const budgets = [
    { name: "Residencial Los Pinos", status: "Excedido", planned: 450000, spent: 485000, percent: 107 },
    { name: "Torre Corporativa ABC", status: "Advertencia", planned: 850000, spent: 765000, percent: 90 },
    { name: "Plaza Comercial Norte", status: "En Control", planned: 620000, spent: 380000, percent: 61 },
  ];

  return (
    <div className="budget-section-manager">
      <div className="section-header-manager">
        <h2>Estado de Presupuestos</h2>
      </div>

      <div className="budget-list-manager">
        {budgets.map((b, i) => (
          <BudgetItem key={i} budget={b} />
        ))}
      </div>
    </div>
  );
};

export default BudgetSection;
