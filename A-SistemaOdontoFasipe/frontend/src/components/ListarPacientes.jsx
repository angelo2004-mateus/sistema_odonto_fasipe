import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './ListarPacientes.scss'
import { FiDownload } from "react-icons/fi";
import CustomSelect from "./CustomSelect";
import ViewDetailsModal from "./ViewDetailsModal";

const ListarPacientes = () => {
  const navigate = useNavigate();
  const [pacientes, setPacientes] = useState([]);
  const [profissionais, setProfissionais] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState('Paciente'); // Estado para controlar a opção selecionada
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const getAllPacientes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/paciente/todos_pacientes"
        );
        setPacientes(response.data);
        localStorage.setItem("dadosDaPrimeiraPagina", JSON.stringify(response.data)); // Ajustado para armazenar como string JSON
      } catch (err) {
        console.log(err);
      }
    };

    const getAllProfissionais = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/profissional/todos_profissionais"
        );
        setProfissionais(response.data);
        localStorage.setItem("dadosDaPrimeiraPagina", JSON.stringify(response.data)); // Ajustado para armazenar como string JSON
      } catch (err) {
        console.log(err);
      }
    };

    // Seleciona qual função chamar com base na opção selecionada
    if (selectedOption === 'Paciente') {
      getAllPacientes();
    } else if (selectedOption === 'Profissional') {
      getAllProfissionais();
    }
  }, [selectedOption]); // Adiciona selectedOption como dependência para que a chamada seja feita quando ele mudar




  const handleSearch = async () => {
    try {
      if (searchQuery === "") {
        if (selectedOption === 'Paciente') {
          const response = await axios.get(
            "http://localhost:3000/paciente/todos_pacientes"
          );
          setPacientes(response.data);
        } else if (selectedOption === 'Profissional') {
          const response = await axios.get(
            "http://localhost:3000/profissional/todos_profissionais"
          );
          setProfissionais(response.data);
        }
        return;
      }

      let response;
      if (selectedOption === 'Paciente') {
        response = await axios.get(
          `http://localhost:3000/paciente/buscar_paciente?search=${searchQuery}`
        );
        setPacientes(response.data);
      } else if (selectedOption === 'Profissional') {
        response = await axios.get(
          `http://localhost:3000/profissional/buscar_profissional?search=${searchQuery}`
        );
        setProfissionais(response.data);
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const openModal = (item, type) => {
    setSelectedItem({ ...item, tipo: type }); // Adiciona o tipo (Paciente ou Profissional) ao item selecionado
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
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

  const getStatusLabel = (status) => {
    switch (status) {
      case 1:
        return "Ativo";
      case 2:
        return "Inativo";
      case 3:
        return "Suspenso";
      default:
        return "Desconhecido";
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 1:
        return "Administrativo";
      case 2:
        return "Técnico Básico";
      case 3:
        return "Técnico Supervisor";
      case 4:
        return "Master";
      default:
        return "Desconhecido";
    }
  };

  const downloadCSV = () => {
    const csvRows = [];
    const headers = ["Código", "Nome", "Nascimento", "CPF"];
    let dataToDownload = pacientes;

    if (selectedOption === 'Profissional') {
      headers.splice(2, 0, 'Especialidade');
      dataToDownload = profissionais.map(profissional => ({
        cod_pac: profissional.cod_prof,
        nome_pac: profissional.nome_prof,
        data_nasc_pac: profissional.especialidade_prof,
        cpf_pac: profissional.cpf_prof,
      }));
    }

    csvRows.push(headers.join(","));

    dataToDownload.forEach(item => {
      const row = [
        item.cod_pac,
        item.nome_pac,
        formatDate(item.data_nasc_pac),
        item.cpf_pac
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

  const options = ['Paciente', 'Profissional'];

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
          <CustomSelect options={options} onSelectChange={setSelectedOption}/>
          <button className="btn_search" onClick={handleSearch}>Pesquisar</button>
          <button className="btn_download_csv" onClick={downloadCSV}>Download CSV <FiDownload /></button>
        </div>

        <div className="pacientes_list">
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>{selectedOption === 'Profissional' ? 'Especialidade' : 'Nascimento'}</th>
                <th>{selectedOption === 'Profissional' ? 'Status' : 'CPF'}</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {selectedOption === 'Paciente' ? (
                pacientes.map((paciente, index) => (
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
                        onClick={() => openModal(paciente, 'Paciente')}
                        className="view_details"
                      >
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                profissionais.map((profissional, index) => (
                  <tr key={index}>
                    <td>{profissional.cod_prof}</td>
                    <td>{profissional.nome_prof}</td>
                    <td>{selectedOption === 'Profissional' ? getTypeLabel(profissional.tipo_prof) : formatDate(profissional.data_nasc_prof)}</td>
                    <td>{selectedOption === 'Profissional' ? getStatusLabel(profissional.status_prof) : profissional.cpf_prof}</td>
                    <td className="th_buttons">
                      <button
                        onClick={() => openModal(profissional, 'Profissional')}
                        className="view_details"
                      >
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ViewDetailsModal isOpen={modalOpen} onClose={closeModal} data={selectedItem} />
    </section>
  );
};

export default ListarPacientes;
