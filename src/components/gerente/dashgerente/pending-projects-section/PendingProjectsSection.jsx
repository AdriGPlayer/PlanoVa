import ProjectItem from "../../../common/ProjectItem";

const PendingProjectsSection = () => {
  const projects = [
    { name: "Torre Residencial Marina Bay", location: "Veracruz, Ver.", due: "15 Dic 2024", progress: 75, status: "Urgente" },
    { name: "Centro Comercial Plaza Norte", location: "Xalapa, Ver.", due: "28 Ene 2025", progress: 45, status: "En Progreso" },
    { name: "Casa Moderna Los Sauces", location: "Fortín, Ver.", due: "10 Feb 2025", progress: 30, status: "En Progreso" },
    { name: "Oficinas Corporativas Tech Hub", location: "Coscomatepec, Ver.", due: "20 Mar 2025", progress: 10, status: "Planificación" },
    { name: "Remodelación Museo Regional", location: "Cuitláhuac, Ver.", due: "05 Abr 2025", progress: 60, status: "En Progreso" },
  ];

  return (
    <div className="pending-projects-section-manager">
      <div className="section-header-manager">
        <h2>Proyectos Pendientes</h2>
        <span className="badge-manager">{projects.length} activos</span>
      </div>

      <div className="projects-list-manager">
        {projects.map((p, i) => (
          <ProjectItem key={i} project={p} />
        ))}
      </div>
    </div>
  );
};

export default PendingProjectsSection;
