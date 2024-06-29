import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListarPacientes.scss';
import axios from 'axios';

const ListarPacientes = () => {
  const navigate = useNavigate();
  const [pacientes, setPacientes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/paciente/todos_pacientes');
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
        const response = await axios.get('http://localhost:3000/paciente/todos_pacientes');
        setPacientes(response.data);
        return;
      }

      const response = await axios.get(`http://localhost:3000/paciente/buscar_paciente?search=${searchQuery}`);
      setPacientes(response.data);
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const registerAnmnese = (cpf_pac) => {
    navigate(`/paciente/anamnese/:${cpf_pac}`);
  };

  return (
    <section className='container_listar_pacientes'>
      <div className='div_listagem'>
        <div className='header_container'>
          <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Pesquisar paciente" />
          <button onClick={handleSearch}>Pesquisar</button>
        </div>

        <div className='pacientes_list'>
          {pacientes.map((paciente, index) => (
            <div key={index} className='paciente_card'>
              <p><strong>CPF:</strong> {paciente.cpf_pac}</p>
              <p><strong>Nome:</strong> {paciente.nome_pac}</p>
              <p><strong>Código:</strong> {paciente.cod_pac}</p>
              <button onClick={() => registerAnmnese(paciente.cpf_pac)} className='cadastrar_anamnese'>
                Cadastrar Anamnese
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListarPacientes;
