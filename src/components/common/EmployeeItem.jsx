const EmployeeItem = ({ employee }) => (
  <div className="employee-item-manager">
    <div className="employee-info-manager">
      <div
        className="employee-avatar-manager"
        style={{ background: employee.color }}
      >
        {employee.initials}
      </div>
      <div>
        <h4>{employee.name}</h4>
        <p>{employee.role}</p>
      </div>
    </div>

    <div className="employee-stats-manager">
      <span className="projects-count-manager">{employee.projects} proyectos</span>
      <div className="progress-bar-manager">
        <div
          className="progress-fill-manager"
          style={{ width: `${employee.progress}%` }}
        ></div>
      </div>
    </div>
  </div>
);

export default EmployeeItem;
