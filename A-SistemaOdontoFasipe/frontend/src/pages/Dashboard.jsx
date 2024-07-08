import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuUsers } from "react-icons/lu";
import { TbClockHour10 } from "react-icons/tb";
import { RiToothLine } from "react-icons/ri";
import "./Dashboard.scss";
import photo_plant from "../img/photo-plant.jpeg";

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
        <div className="container_info_children">
          <motion.div
            className="info div_horario"
            style={{ backgroundImage: `url('${photo_plant}')` }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            exit={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            <span>
              <TbClockHour10 />
            </span>
            <div>
              <p>Horário Local</p>
              <h2>{hours.toLocaleTimeString()}</h2>
            </div>
          </motion.div>

          <motion.div
            className="info div_paciente"
            style={{ backgroundImage: `url('${photo_plant}')` }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            exit={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            <span>
              <LuUsers />
            </span>
            <div>
              <p>Pacientes cadastrados</p>
              <h2>100</h2>
            </div>
          </motion.div>

          <motion.div
            className="info div_profissionais"
            style={{ backgroundImage: `url('${photo_plant}')` }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            exit={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            <span>
              <RiToothLine />
            </span>
            <div>
              <p>Profissionais ativos</p>
              <h2>131</h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
