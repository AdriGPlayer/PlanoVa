import React, { useState } from "react";

const ChartSection = () => {
  const [period, setPeriod] = useState("month");

  const handleChange = (e) => {
    setPeriod(e.target.value);
    console.log("Actualizando gráfica para:", e.target.value);
  };

  const chartData = [9, 13, 7, 17, 11, 15];
  const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];

  return (
    <div className="chart-section-manager">
      <div className="section-header-manager">
        <h2>Proyectos Terminados</h2>
        <select className="time-selector-manager" value={period} onChange={handleChange}>
          <option value="week">Esta Semana</option>
          <option value="month">Este Mes</option>
          <option value="quarter">Este Trimestre</option>
          <option value="year">Este Año</option>
          <option value="custom">Personalizado</option>
        </select>
      </div>

      <div className="chart-container-manager">
        <div className="chart-manager">
          {chartData.map((value, i) => (
            <div
              key={i}
              className="chart-bar-manager"
              style={{ height: `${(value / 20) * 100}%` }}
            >
              <span className="bar-value-manager">{value}</span>
            </div>
          ))}
        </div>
        <div className="chart-labels-manager">
          {labels.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
