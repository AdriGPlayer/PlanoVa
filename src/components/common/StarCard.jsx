const StatCard = ({ stat }) => (
  <div className={`stat-card-manager stat-${stat.type}-manager`}>
    <div className="stat-info-manager">
      <h3>{stat.value}</h3>
      <p>{stat.label}</p>
      <span className={`stat-change-manager ${stat.status}`}>{stat.change}</span>
    </div>
  </div>
);

export default StatCard;
