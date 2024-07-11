import React, { useState, useEffect } from "react";
import ListarPaciente from "../components/ListarPacientes"
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
     <div className="name_page_section">
        <h2>Dashboard</h2>
        <ListarPaciente />
     </div>
     
    </section>
  );
};

export default Dashboard;
