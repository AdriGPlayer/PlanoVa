import EmployeeItem from '../../../common/EmployeeItem'

const EmployeesSection = () => {
  const employees = [
    { name: "Arq. Roberto Mendez", role: "Arquitecto Senior", projects: 12, progress: 95, initials: "AR", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { name: "Arq. María Cervantes", role: "Arquitecta", projects: 10, progress: 85, initials: "MC", color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { name: "Ing. Juan García", role: "Ingeniero Civil", projects: 8, progress: 70, initials: "JG", color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { name: "Arq. Laura Sánchez", role: "Diseñadora", projects: 7, progress: 65, initials: "LS", color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
    { name: "Arq. Carlos Fernández", role: "Arquitecto Junior", projects: 5, progress: 50, initials: "CF", color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
  ];

  return (
    <div className="employees-section-manager">
      <div className="section-header-manager">
        <h2>Rendimiento por Empleado</h2>
      </div>

      <div className="employees-list-manager">
        {employees.map((emp, i) => (
          <EmployeeItem key={i} employee={emp} />
        ))}
      </div>
    </div>
  );
};

export default EmployeesSection;
