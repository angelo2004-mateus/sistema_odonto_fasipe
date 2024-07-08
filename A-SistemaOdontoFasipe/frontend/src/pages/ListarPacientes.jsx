import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import photo_plant from "../img/photo-plant.jpeg";
import "./ListarPacientes.scss";
import axios from "axios";

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
          <button onClick={handleSearch}>Pesquisar</button>
        </div>

        <div className="pacientes_list">
          {pacientes.map((paciente, index) => (
            <div key={index} className="paciente_card">
              <p className="name">
                <b>{paciente.nome_pac}</b>
              </p>
              <p className="cpf">{paciente.cpf_pac}</p>
              <button
                onClick={() => registerAnmnese(paciente)}
                className="view_details"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListarPacientes;
