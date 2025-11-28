const ProjectItem = ({ project }) => {
  const getStatusClass = (status) => {
    if (status === "Urgente") return "status-urgent-manager";
    if (status === "En Progreso") return "status-progress-manager";
    if (status === "Planificación") return "status-planning-manager";
    return "";
  };

  return (
    <div className={`project-item-manager ${project.status === "Urgente" ? "urgent-manager" : ""}`}>
      <div className="project-header-manager">
        <h4>{project.name}</h4>
        <span className={`project-status-manager ${getStatusClass(project.status)}`}>{project.status}</span>
      </div>

      <p className="project-location-manager">{project.location}</p>

      <div className="project-meta-manager">
        <span className="project-date-manager">Vence: {project.due}</span>
        <span className="project-progress-manager">{project.progress}% completado</span>
      </div>

      <div className="progress-bar-manager">
        <div
          className={`progress-fill-manager ${project.status === "Urgente" ? "progress-danger-manager" : ""}`}
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectItem;
