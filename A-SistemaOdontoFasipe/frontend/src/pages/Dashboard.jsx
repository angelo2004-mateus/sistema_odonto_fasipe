import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import ListarPacientes from "../components/ListarPacientes";

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
     <div className="name_page_section">
        <h2>Dashboard</h2>
     </div>
     <div className="list_pacient">
        <ListarPacientes />
     </div>
    </section>
  );
};

export default Dashboard;
