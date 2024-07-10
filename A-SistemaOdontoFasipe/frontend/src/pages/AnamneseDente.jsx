import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi'
import './CadastroDentes.scss';

const upperTeeth = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
const lowerTeeth = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];

const CadastroDentes = () => {
  const [selectedTeeth, setSelectedTeeth] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedTeeth((prevSelectedTeeth) =>
      prevSelectedTeeth.includes(value)
        ? prevSelectedTeeth.filter((tooth) => tooth !== value)
        : [...prevSelectedTeeth, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('selectedTeeth', JSON.stringify(selectedTeeth));
    console.log('Selected Teeth:', selectedTeeth);
    navigate('/proxima-rota'); // Navegar para a próxima rota após o envio
  };

  return (
    <section className='container_cadastro_paciente'>
    <div className='container_button_form'>
      <div className='title'>
        <span className='icon'><FiUser /></span> {/* Ícone FiUser adicionado aqui */}
        <h2>Cadastro Dente</h2>
      </div>

        <div className="backgroundImageContainer">
          <form onSubmit={handleSubmit} className="checkboxForm">
            <div className="teethRow">
              {upperTeeth.map((number) => (
                <div key={number} className="checkboxContainer">
                  <label>
                    <input
                      type="checkbox"
                      value={number}
                      checked={selectedTeeth.includes(number)}
                      onChange={handleCheckboxChange}
                    />
                    {number}
                  </label>
                </div>
              ))}
            </div>
            <div className="teethRow">
              {lowerTeeth.map((number) => (
                <div key={number} className="checkboxContainer">
                  <label>
                    <input
                      type="checkbox"
                      value={number}
                      checked={selectedTeeth.includes(number)}
                      onChange={handleCheckboxChange}
                    />
                    {number}
                  </label>
                </div>
              ))}
            </div>
            <button type="submit" className="btn">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CadastroDentes;
