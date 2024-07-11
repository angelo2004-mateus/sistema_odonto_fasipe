import React, { useState, useEffect } from "react";
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
     </div>
     
    </section>
  );
};

export default Dashboard;
