import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import './ListarPacientes.scss'

import { FiDownload } from "react-icons/fi";

const ListarPacientes = () => {
  const navigate = useNavigate();
  const [pacientes, setPacientes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/paciente/todos_pacientes"
        );
        setPacientes(response.data);
        console.log(response.data)
        localStorage.setItem("dadosDaPrimeiraPagina", response.data)
      } catch (err) {
        console.log(err);
      }
    };

    getAllUsers();
  }, []);

  const handleSearch = async () => {
    try {
      if (searchQuery === "") {
        const response = await axios.get(
          "http://localhost:3000/paciente/todos_pacientes"
        );
        setPacientes(response.data);
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/paciente/buscar_paciente?search=${searchQuery}`
      );
      setPacientes(response.data);
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const registerAnmnese = (paciente) => {
    navigate(`/paciente/cadastroAnamnese`, { state: { paciente } });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("pt-BR", options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  const downloadCSV = () => {
    const csvRows = [];
    const headers = ["Código", "Nome", "Nascimento", "CPF"];
    csvRows.push(headers.join(","));

    pacientes.forEach(paciente => {
      const row = [
        paciente.cod_pac,
        paciente.nome_pac,
        formatDate(paciente.data_nasc_pac),
        paciente.cpf_pac
      ];
      csvRows.push(row.join(","));
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'pacientes.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="container_listar_pacientes">
      <div className="div_listagem">
        <div className="header_container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Pesquisar paciente"
          />
          <button className="btn_search" onClick={handleSearch}>Pesquisar</button>
          <button className="btn_download_csv" onClick={downloadCSV}>Download CSV <FiDownload /></button>
        </div>

        <div className="pacientes_list">
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Nascimento</th>
                <th>CPF</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente, index) => (
                <tr key={index}>
                  <td>{paciente.cod_pac}</td>
                  <td>{paciente.nome_pac}</td>
                  <td>{formatDate(paciente.data_nasc_pac)}</td>
                  <td>{paciente.cpf_pac}</td>
                  <td className="th_buttons">
                    <button
                      onClick={() => registerAnmnese(paciente)}
                      className="anamnese"
                    >
                      Anamnese
                    </button>

                    <button
                      onClick={() => registerAnmnese(paciente)}
                      className="view_details"
                    >
                      Ver Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ListarPacientes;
