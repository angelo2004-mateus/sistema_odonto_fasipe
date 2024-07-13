import React, { useEffect, useState } from "react";
import axios from "axios";
import CardDashboard from "../components/CardDashboard";
import ListarPacientes from "../components/ListarPacientes";
import { FiUser } from "react-icons/fi";
import { HiOutlineDocument } from "react-icons/hi";
import { TbHealthRecognition } from "react-icons/tb";
import "./Dashboard.scss";

const Dashboard = () => {
  const [pacientes, setPacientes] = useState([]);
  const [profissionais, setProfissionais] = useState([]);
  const [anamneses, setAnamneses] = useState([]);

  useEffect(() => {
    const getAllPacientes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/paciente/todos_pacientes"
        );
        setPacientes(response.data);
      } catch (err) {
        console.log("Erro ao obter pacientes:", err);
      }
    };

    const getAllProfissionais = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/profissional/todos_profissionais"
        );
        setProfissionais(response.data);
      } catch (err) {
        console.log("Erro ao obter profissionais:", err);
      }
    };

    const getAllAnamneses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/anamnese/listar"
        );
        setAnamneses(response.data);
      } catch (err) {
        console.log("Erro ao obter anamneses:", err);
      }
    };

    getAllPacientes();
    getAllProfissionais();
    getAllAnamneses();

  }, []); 

  return (
    <section className="dashboard_section">
      <div className="container_cards">
        <CardDashboard
          color="rgba(19, 194, 194, 1)"
          icon={<TbHealthRecognition />}
          nameCard="Profissionais Cadastrados"
          data={profissionais.length} 
          additional_info="Profissionais Operantes"
        />

        <CardDashboard
          color="rgba(245, 34, 45, 1)"
          icon={<TbHealthRecognition />}
          nameCard="Profissionais Ativos"
          data={profissionais.filter(profissional => profissional.status_prof === 1).length} 
          additional_info="Todos Profissionais Ativos"
        />

        <CardDashboard
          color="rgba(250, 140, 22, 1)"
          icon={<FiUser />}
          nameCard="Clientes Cadastrados"
          data={pacientes.length} 
          additional_info="Pacientes Atualizado"
        />

        <CardDashboard
          color="rgba(32, 201, 151, 1)"
          icon={<HiOutlineDocument />}
          nameCard="Anamneses Registradas"
          data={anamneses.length} 
          additional_info="Consultas Feitas"
        />
      </div>

      <div className="container_list_pacients">
        <ListarPacientes pacientes={pacientes} profissionais={profissionais} />
      </div>
    </section>
  );
};

export default Dashboard;
