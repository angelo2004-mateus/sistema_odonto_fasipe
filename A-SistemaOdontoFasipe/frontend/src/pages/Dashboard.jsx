import React, { useState, useEffect } from "react";
import ListarPacientes from "./ListarPacientes";
import "./Dashboard.scss";

const Dashboard = () => {
  const [hours, setHours] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="dashboard_section">
      <div className="container_info">
        <div className="info div_horario">
          <h2>Horário</h2>
          <p>{hours.toLocaleTimeString()}</p>
        </div>

        <div className="info div_paciente">
          <h2>Pacientes</h2>
          <p>100 Pacientes cadastrados</p>
        </div>

        <div className="info div_horario">
          <h2>Profissionais</h2>
          <p>130 Profissionais ativos</p>
        </div>
      </div>

      {/* <ListarPacientes /> */}
    </section>
  );
};

export default Dashboard;
