import React, { useState } from 'react';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FiUser } from "react-icons/fi";

import './CadastroPaciente.scss';

const CadastroPaciente = () => {

  

  // Estado para armazenar os valores dos inputs do formulário
  const [formData, setFormData] = useState({
    cpf_pac: '',
    nome_pac: '',
    cod_pac: '',
    tel_pac: '',
    cep_pac: '',
    logra_pac: '',
    num_logra_pac: '',
    compl_pac: '',
    bairro_pac: '',
    cidade_pac: '',
    uf_pac: '',
    rg_pac: '',
    est_rg_pac: '',
    nome_mae_pac: '',
    data_nasc_pac: ''
  });

  // Função para lidar com a alteração de valor nos inputs do formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData);
    try {
      const response = axios.post('http://localhost:3000/paciente/cadastrar', formData)
      toast("Paciente Cadastrado");
      console.log(response)
    } catch (err) {
      console.log(err)
    }
    
  };

  return (
    <section className='container_cadastro_paciente'>
    
      <div className='container_button_form'>

        <div className='title'>
          <span className='icon'><FiUser /></span>
          <h2>Cadastrar Paciente</h2>
        </div>
        
        <form className='form' method='POST' onSubmit={handleSubmit}>
          {/* CPF do paciente */}
          <input type="number" id="cpf_pac" name="cpf_pac" maxLength="11" required placeholder='CPF' value={formData.cpf_pac} onChange={handleInputChange} />
          
          {/* Nome do paciente */}
          <input type="text" id="nome_pac" name="nome_pac" maxLength="100" required placeholder='Nome' value={formData.nome_pac} onChange={handleInputChange} />
          
          {/* Código do paciente */}
          <input type="number" id="cod_pac" name="cod_pac" maxLength="10" required placeholder='Código' value={formData.cod_pac} onChange={handleInputChange} />
          
          {/* Telefone do paciente */}
          <input type="number" id="tel_pac" name="tel_pac" maxLength="11" required placeholder='Telefone' value={formData.tel_pac} onChange={handleInputChange} />
          
          {/* CEP do paciente */}
          <input type="number" id="cep_pac" name="cep_pac" maxLength="8" placeholder='CEP' value={formData.cep_pac} onChange={handleInputChange} />

          {/* Logradouro do paciente */}
          <input type="text" id="logra_pac" name="logra_pac" maxLength="100" placeholder='Logradouro' value={formData.logra_pac} onChange={handleInputChange} />
          
          {/* Número do logradouro do paciente */}
          <input type="number" id="num_logra_pac" name="num_logra_pac" maxLength="5" placeholder='Número' value={formData.num_logra_pac} onChange={handleInputChange} />
          
          {/* Complemento do paciente */}
          <input type="text" id="compl_pac" name="compl_pac" maxLength="20" placeholder='Complemento' value={formData.compl_pac} onChange={handleInputChange} />
          
          {/* Bairro do paciente */}
          <input type="text" id="bairro_pac" name="bairro_pac" maxLength="50" placeholder='Bairro' value={formData.bairro_pac} onChange={handleInputChange} />
          
          {/* Cidade do paciente */}
          <input type="text" id="cidade_pac" name="cidade_pac" maxLength="50" placeholder='Cidade' value={formData.cidade_pac} onChange={handleInputChange} />
          
          {/* UF do paciente */}
          <input type="text" id="uf_pac" name="uf_pac" maxLength="2" placeholder='Estado' value={formData.uf_pac} onChange={handleInputChange} />
          
          {/* RG do paciente */}
          <input type="number" id="rg_pac" name="rg_pac" maxLength="9" placeholder='RG' value={formData.rg_pac} onChange={handleInputChange} />
          
          {/* Estado do RG do paciente */}
          <input type="text" id="est_rg_pac" name="est_rg_pac" maxLength="2" placeholder='Estado de Emissão' value={formData.est_rg_pac} onChange={handleInputChange} />
          
          {/* Nome da mãe do paciente */}
          <input type="text" id="nome_mae_pac" name="nome_mae_pac" maxLength="100" placeholder='Nome da Mãe' value={formData.nome_mae_pac} onChange={handleInputChange} />
          
          {/* Data de nascimento do paciente */}
          <input type="date" id="data_nasc_pac" name="data_nasc_pac" required value={formData.data_nasc_pac} onChange={handleInputChange} />
        
          <button type='submit' onSubmit={handleSubmit} className='btn_cadastrar_paciente'>Cadastrar</button>
        </form>

       
      </div>
    </section>
  );
};

export default CadastroPaciente;
