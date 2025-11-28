import StatCard from '../../../common/StarCard'

const StatsGrid = () => {
  const stats = [
    { value: "42", label: "Proyectos Terminados", change: "+12% vs mes anterior", type: "completed", status: "positive-manager" },
    { value: "23", label: "Proyectos Pendientes", change: "En proceso", type: "pending", status: "neutral-manager" },
    { value: "$2.4M", label: "Presupuesto Total", change: "85% ejecutado", type: "budget", status: "positive-manager" },
    { value: "18", label: "Empleados Activos", change: "100% capacidad", type: "team", status: "positive-manager" },
  ];

  return (
    <div className="stats-grid-manager">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
};

export default StatsGrid;
